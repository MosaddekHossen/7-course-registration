Question:1=>Add at least 3 Project features:
============================================
Answer:.Search and Filter Functionality: Implement a search bar and filters to make it easier for users to find and select courses that match their interests or requirements. Users could search by course name, filter by credit hours, price range, or other relevant criteria.

.User Profiles and Persistence: Create user profiles that allow users to save their selected courses and retrieve them when they return to the platform. You can use browser storage (localStorage or sessionStorage) or set up a backend server with user accounts to achieve this persistence.

.Interactive Progress Tracking: Add a feature that allows users to track their progress within selected courses. Users can mark completed modules or assignments and see their overall progress. This could include progress bars, checklists, or a dedicated progress tracking page.

Question:2=>Discuss how you managed the state in your assignment project.
=========================================================================
Answer:In my assignment project, I used the following state management techniques:
UseState: I used the useState hook to manage the state of the cart, title, credit, and remaining variables. This allowed me to easily update the state of these variables whenever needed. useEffect: I used the useEffect hook to fetch the data from the data.json file and set the cart state. This hook ensures that the cart state is always up-to-date.