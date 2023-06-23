# Project Title

Web Development Project: TalkEngGlobal.com

## Description

This project focuses on the web development of the website [TalkEngGlobal.com](https://talkengglobal.com/). It involves designing and implementing various features and functionalities to enhance the user experience and provide valuable language learning resources. 

## Table of Contents

- [How to make a pull request](#how-to-make-a-pull-request)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## How to make a Pull Request?

**1.** Start by forking the [**Talkeng**](https://github.com/Xlaton25/talkeng) repository. Click on the <a href="https://github.com/Xlaton25/talkeng"><img src="https://i.imgur.com/G4z1kEe.png" height="21" width="21"></a> symbol at the top right corner.

**2.** Clone your forked repository:

```bash
git clone https://github.com/<your-github-username>/talkeng
```

**3.** Navigate to the new project directory:

```bash
cd talkeng
```

**4.** Set upstream command:

```bash
git remote add upstream https://github.com/Xlaton25/talkeng
```

**5.** Create a new branch:

```bash
git checkout -b YourBranchName
```
<i>or</i>
```bash
git branch YourBranchName
git switch YourBranchName
``` 

**6.** Sync your fork or local repository with the origin repository:

- In your forked repository click on `Fetch upstream`.
- Click `Fetch and merge`.

### Alternatively, Git CLI way to Sync forked repository with origin repository:

```bash
git fetch upstream
```

```bash
git merge upstream/main
```

### [Github Docs](https://docs.github.com/en/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github) for Syncing

**7.** Make your changes to the source code.

**8.** Stage your changes and commit:

⚠️ **Make sure** not to commit `package.json` or `package-lock.json` file

⚠️ **Make sure** not to run the commands ```git add .``` or ```git add *```. Instead, stage your changes for each file/folder

```bash
git add file/folder
```

```bash
git commit -m "<your_commit_message>"
```

**9.** Push your local commits to the remote repository:

```bash
git push origin YourBranchName
```


## Usage
Once the project is installed and running, you can explore the various features and functionalities of TalkEngGlobal.com. The website provides language learning resources, including lessons, exercises, and interactive quizzes. Users can create accounts, track their progress, and engage with the learning materials.

## Features
- User registration and authentication system
- Lesson pages with multimedia content
- Interactive exercises and quizzes
- Progress tracking and user profiles
- Responsive design for mobile and desktop
- Search functionality for lessons
- Social media integration for sharing content
- Multilingual support (optional)

## Contributing
We welcome contributions from the community to improve TalkEngGlobal.com. To contribute, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name:
   ```bash
   git checkout -b feature/your-feature-name
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your forked repository.
5. Submit a pull request, explaining the changes you've made.

Please ensure that your contributions align with the project's coding conventions and follow best practices. We appreciate your help!


**10.** Create a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)!

**11.** **Congratulations!** You've made your first contribution! 🙌🏼

## License
This project is licensed under the MIT License. Feel free to modify and distribute it according to the terms of the license.
