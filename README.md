// Stage all changes
git add -A

// Reset to last commit
git reset --hard HEAD

// Delete the last commit
git log // Copy the commit id, then type q to exit
git reset --hard <commit-id>


// List all branches
git branch

// Create and switch to a new branch
git checkout -b <branch-name>

// Merge changes from another branch
git merge <branch-name>
