// ============================================================
// BESPOKE PRECISION CLICK-LOCK COUNTERSINK
// 3D Printable Prototype - OpenSCAD
// Bespoke Woodcraft Studio © 2026
// ============================================================
// 
// PRINTING NOTES:
// - Print at 0.12mm layer height for thread detail
// - Use PETG or ABS for durability testing
// - PLA is fine for fit-check prototyping
// - All dimensions in mm
// - Scale factor: 1:1 (actual size)
// - Print each part separately using the part selector below
//
// TO EXPORT STL:
// 1. Set 'part' variable to desired part name
// 2. Render (F6)
// 3. Export as STL (F7)
// ============================================================

// ─── PART SELECTOR ──────────────────────────────────
// Change this to render individual parts for printing:
// "all"          - Show all parts assembled (for viewing)
// "exploded"     - Show all parts exploded (for viewing)
// "body"         - Main body (print this)
// "collar"       - Depth adjustment collar (print this)
// "foot_carrier" - Foot carrier ring (print this)
// "uhmw_foot"    - UHMW foot ring (print this)
// "cutter_head"  - Cutter head body (print this)
// "collet"       - Split collet (print this)
// "collet_nut"   - Knurled collet nut (print this)
// "cam_lever"    - Cam lock lever (print this)
// "ratchet_ring" - Ratchet tooth ring (print this)

part = "all";  // ← CHANGE THIS

// ─── GLOBAL PARAMETERS ──────────────────────────────
$fn = 72;  // Facet count (increase to 120 for final render)

// Dimensions (mm)
body_od = 19.05;        // 0.750"
body_length = 82.5;     // 3.25"
hex_size = 6.35;        // 1/4" across flats
hex_length = 25.4;      // 1.0"
bore_dia = 6.6;         // 0.260" through-bore for drill
thread_od = 18.0;       // External thread zone OD
thread_pitch = 1.0;     // 1mm pitch
thread_zone_len = 16.0; // Thread zone length

collar_od = 25.4;       // 1.000"
collar_height = 16.0;   // Collar height
collar_id = 18.2;       // Internal thread bore (slightly > thread_od for clearance)

foot_od = 28.6;         // 1.125" 
foot_carrier_od = 26.0;
foot_carrier_height = 10.0;
foot_ring_height = 4.0;
bearing_od = 18.0;      // 6701-ZZ outer
bearing_id = 12.0;      // 6701-ZZ inner
bearing_width = 4.0;

cutter_body_top = 16.0;
cutter_body_bot = 12.0;
cutter_length = 22.0;
cutter_thread_dia = 6.35; // 1/4"-28
cutter_thread_len = 9.5;

collet_od = 8.0;
collet_id = 4.5;        // Max drill bit dia + clearance
collet_length = 14.0;

nut_od = 12.0;
nut_id = 8.2;
nut_height = 8.0;

drill_dia = 3.0;
drill_length = 55.0;

cam_length = 16.0;
cam_width = 6.0;
cam_height = 4.0;

ratchet_od = 22.0;
ratchet_id = 18.5;
ratchet_height = 2.0;
ratchet_teeth = 60;

snap_ring_groove_dia = 17.0;
snap_ring_width = 1.2;

// ─── MODULES ─────────────────────────────────────────

module hex_prism(size, height) {
    // size = across flats
    cylinder(d=size/cos(30), h=height, $fn=6);
}

module knurl(od, height, count=24) {
    difference() {
        cylinder(d=od, h=height);
        for (i=[0:count-1]) {
            rotate([0,0,i*360/count])
            translate([od/2, 0, -0.1])
            cylinder(d=1.2, h=height+0.2, $fn=12);
        }
    }
}

module thread_profile(od, pitch, length, depth=0.5) {
    // Simplified visual thread (not functional - use tolerance for real threads)
    turns = floor(length / pitch);
    for (i=[0:turns-1]) {
        translate([0, 0, i*pitch])
        difference() {
            cylinder(d=od, h=pitch*0.9);
            cylinder(d=od-depth*2, h=pitch*0.9);
            translate([0,0,pitch*0.45])
            rotate_extrude()
            translate([od/2-depth, 0])
            circle(d=depth*1.5, $fn=12);
        }
    }
}

module graduation_marks(radius, count, mark_length, mark_depth) {
    for (i=[0:count-1]) {
        rotate([0, 0, i*360/count])
        translate([radius, 0, 0])
        cube([mark_length, mark_depth, mark_depth], center=true);
    }
}

// ─── PART: MAIN BODY ─────────────────────────────────
module main_body() {
    color([0.55, 0.57, 0.58]) // 303 Stainless
    difference() {
        union() {
            // Hex shank
            translate([0, 0, body_length - hex_length])
            hex_prism(hex_size, hex_length);
            
            // Transition from hex to round
            translate([0, 0, body_length - hex_length - 3])
            cylinder(d1=body_od, d2=hex_size/cos(30), h=3);
            
            // Main cylindrical body
            cylinder(d=body_od, h=body_length - hex_length - 3);
            
            // Datum shoulder (wider flange)
            translate([0, 0, 12])
            cylinder(d=body_od + 4, h=3);
            
            // Cam pivot boss
            translate([body_od/2, 0, 42])
            rotate([0, 90, 0])
            cylinder(d=6, h=4);
        }
        
        // Through bore for drill bit
        translate([0, 0, -1])
        cylinder(d=bore_dia, h=body_length + 2);
        
        // Internal thread for cutter head (bottom)
        translate([0, 0, -0.5])
        cylinder(d=cutter_thread_dia + 0.4, h=cutter_thread_len + 0.5);
        
        // External thread zone (visual, for the collar)
        // In 3D print, this would be smooth with tolerance
        
        // Bearing seat
        translate([0, 0, 3])
        cylinder(d=bearing_od + 0.2, h=bearing_width * 2 + 1);
        
        // Snap ring groove
        translate([0, 0, 1.5])
        difference() {
            cylinder(d=snap_ring_groove_dia + snap_ring_width*2, h=snap_ring_width);
            cylinder(d=snap_ring_groove_dia, h=snap_ring_width);
        }
        
        // Cam lever pivot hole
        translate([body_od/2 - 2, 0, 42])
        rotate([0, 90, 0])
        cylinder(d=3.1, h=10);
        
        // Reading window flat
        translate([-body_od/2 - 1, -3, 30])
        cube([3, 6, 20]);
        
        // Index mark grooves on body
        for (i=[0:11]) {
            translate([0, 0, 22 + i*2.5])
            difference() {
                cylinder(d=body_od+0.1, h=0.3);
                cylinder(d=body_od-1.5, h=0.3);
            }
        }
    }
}

// ─── PART: DEPTH COLLAR ──────────────────────────────
module depth_collar() {
    color([0.12, 0.12, 0.12]) // Black anodized
    difference() {
        union() {
            // Main collar body with knurling
            knurl(collar_od, collar_height, 36);
            
            // Ratchet ring seat (top face recess will be cut)
        }
        
        // Internal bore (threads in real version)
        translate([0, 0, -0.1])
        cylinder(d=collar_id, h=collar_height + 0.2);
        
        // Ratchet ring press-fit recess on top
        translate([0, 0, collar_height - ratchet_height])
        difference() {
            cylinder(d=ratchet_od + 0.2, h=ratchet_height + 0.1);
            cylinder(d=ratchet_id - 0.2, h=ratchet_height + 0.1);
        }
        
        // Graduation marks (60 divisions)
        translate([0, 0, collar_height/2])
        graduation_marks(collar_od/2, 60, 2.5, 0.3);
        
        // Major graduation marks (every 10)
        translate([0, 0, collar_height/2])
        graduation_marks(collar_od/2, 6, 4.0, 0.5);
    }
}

// ─── PART: RATCHET RING ──────────────────────────────
module ratchet_ring() {
    color([0.35, 0.35, 0.35]) // Hardened steel
    difference() {
        cylinder(d=ratchet_od, h=ratchet_height);
        cylinder(d=ratchet_id, h=ratchet_height);
        
        // Cut triangular ratchet teeth on top face
        for (i=[0:ratchet_teeth-1]) {
            rotate([0, 0, i*360/ratchet_teeth])
            translate([ratchet_od/2 - 1, 0, ratchet_height])
            rotate([0, 0, 0])
            linear_extrude(height=0.1)
            polygon([
                [-0.3, -0.5],
                [0.3, -0.5],
                [0, 0.5]
            ]);
        }
    }
    
    // Add tooth profiles
    for (i=[0:ratchet_teeth-1]) {
        rotate([0, 0, i*360/ratchet_teeth + 3])
        translate([(ratchet_od+ratchet_id)/4, 0, 0])
        linear_extrude(height=ratchet_height)
        polygon([
            [-0.8, -0.2],
            [0.8, -0.2],
            [0, 0.6]
        ]);
    }
}

// ─── PART: CAM LEVER ─────────────────────────────────
module cam_lever() {
    color([0.5, 0.52, 0.53]) // 17-4 PH
    union() {
        // Lever arm
        hull() {
            translate([0, 0, 0])
            cylinder(d=cam_width, h=cam_height);
            
            translate([cam_length, 0, 0])
            cylinder(d=cam_width + 2, h=cam_height);
        }
        
        // Eccentric cam profile at pivot end
        translate([0, 0, 0])
        cylinder(d=8, h=cam_height);
        
        // Thumb pad at end
        translate([cam_length, 0, 0])
        cylinder(d=cam_width + 4, h=cam_height + 1);
    }
    
    // Subtract pivot hole
    color([0.5, 0.52, 0.53])
    difference() {
        translate([0, 0, -0.1])
        cylinder(d=0.1, h=0.1); // dummy for difference
        
        translate([0, 0, -0.1])
        cylinder(d=3.0, h=cam_height + 0.2);
    }
}

// ─── PART: FOOT CARRIER ──────────────────────────────
module foot_carrier() {
    color([0.63, 0.65, 0.66]) // Aluminum
    difference() {
        union() {
            // Main carrier ring
            difference() {
                cylinder(d=foot_carrier_od, h=foot_carrier_height);
                translate([0, 0, -0.1])
                cylinder(d=bearing_od + 0.2, h=foot_carrier_height + 0.2);
            }
            
            // UHMW press-fit lip at bottom
            translate([0, 0, -2])
            difference() {
                cylinder(d=foot_od, h=2);
                translate([0, 0, -0.1])
                cylinder(d=foot_carrier_od - 2, h=2.2);
            }
        }
        
        // Chip ejection slots (4x at 90°)
        for (i=[0:3]) {
            rotate([0, 0, i*90])
            translate([0, -2.5, -3])
            cube([foot_od/2 + 2, 5, foot_carrier_height + 6]);
        }
    }
}

// ─── PART: UHMW FOOT RING ───────────────────────────
module uhmw_foot() {
    color([0.92, 0.90, 0.85]) // White UHMW-PE
    difference() {
        cylinder(d=foot_od, h=foot_ring_height);
        translate([0, 0, -0.1])
        cylinder(d=foot_carrier_od - 2.2, h=foot_ring_height + 0.2);
        
        // Chip ejection slots (match carrier)
        for (i=[0:3]) {
            rotate([0, 0, i*90])
            translate([0, -2.5, -0.1])
            cube([foot_od/2 + 2, 5, foot_ring_height + 0.2]);
        }
    }
}

// ─── PART: CUTTER HEAD ───────────────────────────────
module cutter_head() {
    color([0.42, 0.44, 0.45]) // Tool steel
    difference() {
        union() {
            // Threaded shank section
            cylinder(d=cutter_thread_dia, h=cutter_thread_len);
            
            // Flare out to cutter body
            translate([0, 0, cutter_thread_len])
            cylinder(d1=cutter_thread_dia, d2=cutter_body_top, h=3);
            
            // Main cutter body
            translate([0, 0, cutter_thread_len + 3])
            cylinder(d1=cutter_body_top, d2=cutter_body_bot, h=cutter_length - cutter_thread_len - 3);
            
            // Carbide inserts (raised bumps)
            for (i=[0:1]) {
                rotate([0, 0, i*180])
                translate([cutter_body_bot/2 - 1, -2, cutter_length - 6])
                cube([2, 4, 5]);
            }
        }
        
        // Through bore for drill
        translate([0, 0, -0.1])
        cylinder(d=collet_od + 0.4, h=cutter_length - 4);
        
        // Collet taper seat
        translate([0, 0, cutter_length - 10])
        cylinder(d1=collet_od + 0.4, d2=collet_od - 1, h=6);
        
        // 82° countersink angle at tip
        translate([0, 0, cutter_length])
        rotate([180, 0, 0])
        cylinder(d1=0, d2=cutter_body_bot + 4, h=cutter_body_bot/2/tan(41));
        
        // Chip ejection flutes
        for (i=[0:1]) {
            rotate([0, 0, i*180 + 90])
            translate([-1.5, -cutter_body_top/2 - 1, cutter_thread_len])
            cube([3, cutter_body_top + 2, cutter_length]);
        }
        
        // Flat for hand-tightening at top of cutter
        translate([cutter_thread_dia/2 - 1, -5, 2])
        cube([3, 10, 5]);
    }
}

// ─── PART: SPLIT COLLET ──────────────────────────────
module split_collet() {
    color([0.55, 0.57, 0.58]) // 303 SS
    difference() {
        // Tapered body (7° external taper)
        cylinder(d1=collet_od, d2=collet_od - 2*collet_length*tan(7)*0.3, h=collet_length);
        
        // Internal bore for drill bit
        translate([0, 0, -0.1])
        cylinder(d=drill_dia + 0.3, h=collet_length + 0.2);
        
        // 4 slits to create spring fingers
        for (i=[0:3]) {
            rotate([0, 0, i*90])
            translate([-0.3, -collet_od/2 - 1, 2])
            cube([0.6, collet_od + 2, collet_length - 2]);
        }
    }
}

// ─── PART: KNURLED COLLET NUT ────────────────────────
module collet_nut() {
    color([0.77, 0.65, 0.35]) // C360 Brass
    difference() {
        knurl(nut_od, nut_height, 20);
        
        // Internal taper to match collet
        translate([0, 0, -0.1])
        cylinder(d1=collet_od + 0.5, d2=collet_od - 1.5, h=nut_height + 0.2);
        
        // Through hole for drill
        translate([0, 0, -0.1])
        cylinder(d=drill_dia + 1, h=nut_height + 0.2);
    }
}

// ─── PART: DRILL BIT (visual reference) ──────────────
module drill_bit() {
    color([0.7, 0.72, 0.73]) // HSS
    union() {
        // Shank
        cylinder(d=drill_dia, h=drill_length);
        
        // Point (118° standard)
        translate([0, 0, -drill_dia/2/tan(59)])
        cylinder(d1=0, d2=drill_dia, h=drill_dia/2/tan(59));
    }
}

// ─── ASSEMBLY VIEWS ──────────────────────────────────

module assembled_view() {
    // Body
    translate([0, 0, 0])
    main_body();
    
    // Bearings (visual - use real bearings in production)
    color([0.83, 0.63, 0.1])
    translate([0, 0, 3]) {
        difference() {
            cylinder(d=bearing_od, h=bearing_width);
            cylinder(d=bearing_id, h=bearing_width);
        }
        translate([0, 0, bearing_width + 0.5])
        difference() {
            cylinder(d=bearing_od, h=bearing_width);
            cylinder(d=bearing_id, h=bearing_width);
        }
    }
    
    // Foot carrier
    translate([0, 0, 0])
    foot_carrier();
    
    // UHMW foot
    translate([0, 0, -foot_ring_height])
    uhmw_foot();
    
    // Depth collar
    translate([0, 0, 22])
    depth_collar();
    
    // Ratchet ring (on top of collar)
    translate([0, 0, 22 + collar_height - ratchet_height])
    ratchet_ring();
    
    // Cam lever
    translate([body_od/2 + 2, 0, 40])
    cam_lever();
    
    // Cutter head (threaded into bottom)
    translate([0, 0, -cutter_length])
    cutter_head();
    
    // Collet
    translate([0, 0, -cutter_length - collet_length + 4])
    split_collet();
    
    // Collet nut
    translate([0, 0, -cutter_length - collet_length - nut_height + 8])
    collet_nut();
    
    // Drill bit
    translate([0, 0, -cutter_length - collet_length - nut_height - drill_length + 15])
    drill_bit();
}

module exploded_view() {
    spacing = 18;  // Space between parts
    
    // Drill bit
    translate([0, 0, -spacing * 7])
    drill_bit();
    
    // Collet nut
    translate([0, 0, -spacing * 6])
    collet_nut();
    
    // Split collet
    translate([0, 0, -spacing * 5])
    split_collet();
    
    // Cutter head
    translate([0, 0, -spacing * 3.5])
    cutter_head();
    
    // Snap ring (visual)
    color([0.2, 0.2, 0.2])
    translate([0, 0, -spacing * 1.5])
    difference() {
        cylinder(d=snap_ring_groove_dia + snap_ring_width, h=snap_ring_width);
        cylinder(d=snap_ring_groove_dia, h=snap_ring_width);
        translate([snap_ring_groove_dia/2, -1, -0.1])
        cube([5, 2, snap_ring_width + 0.2]);
    }
    
    // UHMW foot
    translate([0, 0, -spacing * 0.5])
    uhmw_foot();
    
    // Foot carrier
    translate([0, 0, spacing * 0.5])
    foot_carrier();
    
    // Bearings
    color([0.83, 0.63, 0.1])
    translate([0, 0, spacing * 1.5]) {
        difference() {
            cylinder(d=bearing_od, h=bearing_width);
            cylinder(d=bearing_id, h=bearing_width);
        }
        translate([0, 0, bearing_width + 2])
        difference() {
            cylinder(d=bearing_od, h=bearing_width);
            cylinder(d=bearing_id, h=bearing_width);
        }
    }
    
    // Main body
    translate([0, 0, spacing * 3])
    main_body();
    
    // Depth collar
    translate([0, 0, spacing * 3 + 22 + spacing])
    depth_collar();
    
    // Ratchet ring
    translate([0, 0, spacing * 3 + 22 + spacing * 2])
    ratchet_ring();
    
    // Cam lever (offset to side)
    translate([30, 0, spacing * 3 + 42])
    cam_lever();
}

// ─── RENDER SELECTION ────────────────────────────────

if (part == "all") {
    assembled_view();
} else if (part == "exploded") {
    exploded_view();
} else if (part == "body") {
    main_body();
} else if (part == "collar") {
    depth_collar();
} else if (part == "foot_carrier") {
    foot_carrier();
} else if (part == "uhmw_foot") {
    uhmw_foot();
} else if (part == "cutter_head") {
    cutter_head();
} else if (part == "collet") {
    split_collet();
} else if (part == "collet_nut") {
    collet_nut();
} else if (part == "cam_lever") {
    cam_lever();
} else if (part == "ratchet_ring") {
    ratchet_ring();
}
