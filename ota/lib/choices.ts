import { Icons } from '@hydro-sdk/hydro-sdk/runtime/flutter/material/index';
import {Choice} from './choice';

export const choices = [
    new Choice({ title: "Car", icon: Icons.directions_car }),
    new Choice({ title: "Bicycle", icon: Icons.directions_bike }),
    new Choice({ title: "Boat", icon: Icons.directions_boat }),
    new Choice({ title: "Bus", icon: Icons.directions_bus }),
    new Choice({ title: "Train", icon: Icons.directions_railway }),
    new Choice({ title: "Walk", icon: Icons.directions_walk }),
];