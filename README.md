# Dev-Hank Project

This repository contains multiple versions of the project, each stored in its respective folder (e.g., `v1`, `v2`).

## Deployment

The deployment process is managed using GitHub Actions. The version to deploy is determined dynamically based on the `version.json` file.

### Folder Structure

- `v1/`: Contains the first version of the project.
- `v2/`: Contains the second version of the project.

## How to Use

1. Update the `version.json` file to specify the version to deploy.
2. Create a pull request to trigger a test deployment.
3. Merge to the `dev` branch to deploy the specified version to production.

## Future Enhancements

- Add support for additional metadata in `version.json`.
- Extend the workflow to handle more complex deployment scenarios.
