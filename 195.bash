# Given a text file file.txt, print just the 10th line of the file.

# Example:

# Assume that file.txt has the following content:

# Line 1
# Line 2
# Line 3
# Line 4
# Line 5
# Line 6
# Line 7
# Line 8
# Line 9
# Line 10

# Your script should output the tenth line, which is:
# Line 10

    # Read from the file file.txt and output the tenth line to stdout.
    awk '{if(NR==10) print $0}' file.txt

    # NR: the current row number (start from 1).
    # Because the default action of awk is {print $0}, we can ignore the action.

    awk 'NR == 10' file.txt

    # Another Solution 
    sed -n 10p file.txt

    # Another Solution 
    tail -n+10 file.txt|head -1