
Hello fellow developer/tester,

1. `git pull` to pull the latest version from the **develop** branch.
2. Make the necessary changes in the code.
3. `git checkout -b user/<yournameshort>/<ticket-id>` to bring those changes to your own branch.
4. `git add` to add the changes.
5. `git commit -m "<ticket-id>: <ticket title>"` to add the commit to your own branch.
6. Create a pull/merge request (PR) with the same title as the commit for example: **"GHOS-1: Restructure the repository"**. 
	1. **Important!** Make sure the PR is merging your branch into the -> **develop** branch
	2. Always add another developer as a reviewer
	3. Assign yourself to the PR
	4. If needed add necessary labels
	5. Add the link to the story/ticket from Jira in the comments
	6. Wait for someone to review and accept your PR
8. Close/merge your PR if not already done by the reviewer

Congrats, you have now contributed to the repository!

