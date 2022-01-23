## Kalera Transport Management System - kaleraTMS

After feedback from Tobias Verleger I built this CLI under these conditions:
- we assume startPos(0,0) at the harvest location
- field size is supposed to be passed
- commands are supposed to be passed as string i.e 'frf'
- robot position is supposed to be passed i.e. as (0,0), orientation('N')

The obstacle array can be edited in the index.ts file, below that there is an example entry for a successful path of the robot
The CLI will prompt you to enter the start position for the robot, the direction it points to, a series of commands and the 
coordinates for the packing station aka x_max and y_max

At the bottom of the index.ts there are example test cases for which the main() method needs to be commented out to bypass 
the prompt for speed.
