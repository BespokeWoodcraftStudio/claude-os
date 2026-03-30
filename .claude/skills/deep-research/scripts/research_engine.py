#!/usr/bin/env python3
"""
Deep Research Engine for Claude Code
Orchestrates comprehensive research across multiple sources with verification and synthesis
"""

import argparse
import json
import sys
import time
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Optional, Any
from dataclasses import dataclass, asdict
from enum import Enum


class ResearchPhase(Enum):
    """Research pipeline phases"""
    SCOPE = "scope"
    PLAN = "plan"
    RETRIEVE = "retrieve"
    TRIANGULATE = "triangulate"
    SYNTHESIZE = "synthesize"
    CRITIQUE = "critique"
    REFINE = "refine"
    PACKAGE = "package"


class ResearchMode(Enum):
    """Research depth modes"""
    QUICK = "quick"
    STANDARD = "standard"
    DEEP = "deep"
    ULTRADEEP = "ultradeep"


@dataclass
class Source:
    """Represents a research source"""
    url: str
    title: str
    snippet: str
    retrieved_at: str
    credibility_score: float = 0.0
    source_type: str = "web"
    verification_status: str = "unverified"

    def to_citation(self, index: int) -> str:
        """Generate citation string"""
        return f"[{index}] {self.title} - {self.url} (Retrieved: {self.retrieved_at})"


@dataclass
class ResearchState:
    """Maintains research state across phases"""
    query: str
    mode: ResearchMode
    phase: ResearchPhase
    scope: Dict[str, Any]
    plan: Dict[str, Any]
    sources: List[Source]
    findings: List[Dict[str, Any]]
    synthesis: Dict[str, Any]
    critique: Dict[str, Any]
    report: str
    metadata: Dict[str, Any]

    def save(self, filepath: Path):
        """Save research state to file with retry logic"""
        max_retries = 3
        for attempt in range(max_retries):
            try:
                with open(filepath, 'w') as f:
                    json.dump(self._serialize(), f, indent=2)
                return
            except (IOError, OSError) as e:
                if attempt == max_retries - 1:
                    raise IOError(f"Failed to save state after {max_retries} attempts: {e}")
                wait_time = (attempt + 1) * 0.5
                time.sleep(wait_time)

    def _serialize(self) -> dict:
        """Convert to serializable dict"""
        return {
            'query': self.query,
            'mode': self.mode.value,
            'phase': self.phase.value,
            'scope': self.scope,
            'plan': self.plan,
            'sources': [asdict(s) for s in self.sources],
            'findings': self.findings,
            'synthesis': self.synthesis,
            'critique': self.critique,
            'report': self.report,
            'metadata': self.metadata
        }

    @classmethod
    def load(cls, filepath: Path) -> 'ResearchState':
        """Load research state from file"""
        with open(filepath, 'r') as f:
            data = json.load(f)

        return cls(
            query=data['query'],
            mode=ResearchMode(data['mode']),
            phase=ResearchPhase(data['phase']),
            scope=data['scope'],
            plan=data['plan'],
            sources=[Source(**s) for s in data['sources']],
            findings=data['findings'],
            synthesis=data['synthesis'],
            critique=data['critique'],
            report=data['report'],
            metadata=data['metadata']
        )


class ResearchEngine:
    """Main research orchestration engine"""

    def __init__(self, mode: ResearchMode = ResearchMode.STANDARD):
        self.mode = mode
        self.state: Optional[ResearchState] = None
        self.output_dir = Path.home() / ".claude" / "research_output"
        self.output_dir.mkdir(parents=True, exist_ok=True)

    def initialize_research(self, query: str) -> ResearchState:
        """Initialize new research session"""
        self.state = ResearchState(
            query=query,
            mode=self.mode,
            phase=ResearchPhase.SCOPE,
            scope={},
            plan={},
            sources=[],
            findings=[],
            synthesis={},
            critique={},
            report="",
            metadata={
                'started_at': datetime.now().isoformat(),
                'version': '1.0'
            }
        )
        return self.state

    def get_phase_instructions(self, phase: ResearchPhase) -> str:
        """Get instructions for current phase"""
        instructions = {
            ResearchPhase.SCOPE: "Phase 1: SCOPE - Define research boundaries and success criteria",
            ResearchPhase.PLAN: "Phase 2: PLAN - Create intelligent research roadmap",
            ResearchPhase.RETRIEVE: "Phase 3: RETRIEVE - Systematically collect information",
            ResearchPhase.TRIANGULATE: "Phase 4: TRIANGULATE - Validate across multiple sources",
            ResearchPhase.SYNTHESIZE: "Phase 5: SYNTHESIZE - Connect insights and generate understanding",
            ResearchPhase.CRITIQUE: "Phase 6: CRITIQUE - Rigorously evaluate research quality",
            ResearchPhase.REFINE: "Phase 7: REFINE - Address gaps and strengthen weak areas",
            ResearchPhase.PACKAGE: "Phase 8: PACKAGE - Deliver professional research report",
        }
        return instructions.get(phase, "No instructions available for this phase")

    def execute_phase(self, phase: ResearchPhase) -> Dict[str, Any]:
        """Execute a research phase"""
        print(f"\n{'='*80}")
        print(f"PHASE {phase.value.upper()}: Starting...")
        print(f"{'='*80}\n")

        instructions = self.get_phase_instructions(phase)
        print(instructions)

        result = {
            'phase': phase.value,
            'status': 'instructions_displayed',
            'timestamp': datetime.now().isoformat()
        }

        return result

    def run_pipeline(self, query: str) -> str:
        """Run complete research pipeline"""
        print(f"\n{'#'*80}")
        print(f"# DEEP RESEARCH ENGINE")
        print(f"# Query: {query}")
        print(f"# Mode: {self.mode.value}")
        print(f"{'#'*80}\n")

        self.initialize_research(query)

        phases = self._get_phases_for_mode()

        for phase in phases:
            self.state.phase = phase
            result = self.execute_phase(phase)

            state_file = self.output_dir / f"research_state_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
            self.state.save(state_file)
            print(f"\nPhase {phase.value} complete. State saved to: {state_file}\n")

        report_file = self.output_dir / f"research_report_{datetime.now().strftime('%Y%m%d_%H%M%S')}.md"

        print(f"\n{'='*80}")
        print(f"RESEARCH PIPELINE COMPLETE")
        print(f"Report will be saved to: {report_file}")
        print(f"{'='*80}\n")

        return str(report_file)

    def _get_phases_for_mode(self) -> List[ResearchPhase]:
        """Get phases based on research mode"""
        if self.mode == ResearchMode.QUICK:
            return [
                ResearchPhase.SCOPE,
                ResearchPhase.RETRIEVE,
                ResearchPhase.PACKAGE
            ]
        elif self.mode == ResearchMode.STANDARD:
            return [
                ResearchPhase.SCOPE,
                ResearchPhase.PLAN,
                ResearchPhase.RETRIEVE,
                ResearchPhase.TRIANGULATE,
                ResearchPhase.SYNTHESIZE,
                ResearchPhase.PACKAGE
            ]
        elif self.mode == ResearchMode.DEEP:
            return list(ResearchPhase)
        elif self.mode == ResearchMode.ULTRADEEP:
            return list(ResearchPhase)

        return list(ResearchPhase)


def main():
    """CLI entry point"""
    parser = argparse.ArgumentParser(
        description="Deep Research Engine for Claude Code",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python research_engine.py --query "state of quantum computing 2025" --mode deep
  python research_engine.py --query "PostgreSQL vs Supabase comparison" --mode standard
  python research_engine.py -q "longevity biotech funding trends" -m ultradeep
        """
    )

    parser.add_argument(
        '--query', '-q',
        type=str,
        required=True,
        help='Research question or topic'
    )

    parser.add_argument(
        '--mode', '-m',
        type=str,
        choices=['quick', 'standard', 'deep', 'ultradeep'],
        default='standard',
        help='Research depth mode (default: standard)'
    )

    parser.add_argument(
        '--resume',
        type=str,
        help='Resume from saved state file'
    )

    args = parser.parse_args()

    mode = ResearchMode(args.mode)
    engine = ResearchEngine(mode=mode)

    if args.resume:
        state_file = Path(args.resume)
        if not state_file.exists():
            print(f"Error: State file not found: {state_file}", file=sys.stderr)
            sys.exit(1)
        engine.state = ResearchState.load(state_file)
        print(f"Resumed research from: {state_file}")

    report_path = engine.run_pipeline(args.query)

    print(f"\nResearch complete! Report path: {report_path}")
    print(f"\nNow Claude should execute each phase using the displayed instructions.")


if __name__ == '__main__':
    main()
