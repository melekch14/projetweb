-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : sam. 22 avr. 2023 à 02:11
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `hotel_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `message` text NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `message`, `date`) VALUES
(1, 'melek chaari', 'melek@gmail.com', 'Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant les structures propres à une langue (conjugaisons, construction et association des phrases…)1. Un texte n\'a pas de longueur déterminée sauf dans le cas de poèmes à forme fixe comme le sonnet ou le haïku.\n\nL\'étude formelle des textes s\'appuie sur la linguistique, qui est l\'approche scientifique du langage.', '2023-04-21 23:07:04'),
(2, 'ryhab arafet', 'ryhabarafet123@gmail.com', 'Un texte répond de façon plus ou moins pertinente à des critères qui en déterminent la qualité littéraire. On retient en particulier la structure d\'ensemble, la syntaxe et la ponctuation, l\'orthographe lexicale et grammaticale, la pertinence et la richesse du vocabulaire, la présence de figures de style, le registre de langue et la fonction recherchée (narrative, descriptive, expressive, argumentative, injonctive, poétique). C\'est l\'objet de l\'analyse littéraire.', '2023-04-21 23:11:33');

-- --------------------------------------------------------

--
-- Structure de la table `reservations`
--

CREATE TABLE `reservations` (
  `id` int(11) NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `title` varchar(150) NOT NULL,
  `adult` int(11) NOT NULL,
  `child` int(11) NOT NULL,
  `room` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `reservations`
--

INSERT INTO `reservations` (`id`, `start_date`, `end_date`, `title`, `adult`, `child`, `room`) VALUES
(1, '2023-04-22 08:30:15', '2023-04-24 12:30:15', 'melek', 2, 0, 'Suite Wallis Simpson'),
(2, '2023-04-21 08:30:15', '2023-04-21 12:30:15', 'melek', 2, 1, 'Suite Wallis Simpson'),
(3, '2023-04-24 08:30:15', '2023-04-27 12:30:15', 'melekch2', 2, 2, 'Suite August Macke'),
(4, '2023-04-10 08:30:15', '2023-04-12 12:30:15', 'ryhabarafet', 2, 0, 'Suite Yasmine');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'ryhabarafet', 'ryhabarafet@gmail.com', 'ryhab123'),
(4, 'melekch2', 'melekch2@gmail.com', 'melek123'),
(5, 'melek', 'melek@gmail.com', 'melek1'),
(6, 'admin', 'admin@admin.com', 'admin'),
(7, 'ryhab', 'ryhab@gmail.com', 'ryhab');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
