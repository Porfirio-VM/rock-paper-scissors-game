import papper from './assets/images/icon-paper.svg'
import scissors from './assets/images/icon-scissors.svg'
import rock from './assets/images/icon-rock.svg'
import spock from './assets/images/icon-spock.svg'
import lizard from './assets/images/icon-lizard.svg'


export const hands = [
    {
        id: 1,
        hand: 'paper',
        img: papper,
    },
    {
        id: 2,
        hand: 'scissors',
        img: scissors,
    },
    {
        id: 3,
        hand: 'rock',
        img: rock,
    }
]

export const bonusHands = [
    {
        id: 1,
        hand: 'scissors',
        img: scissors
    },
    {
        id: 2,
        hand: 'spock',
        img: spock,
    },
    {
        id: 3,
        hand: 'paper',
        img: papper,
    },
    {
        id: 4,
        hand: 'lizard',
        img: lizard,
    },
    {
        id: 5,
        hand: 'rock',
        img: rock,
    }
]

export const rules = {
    rock: { beats: "scissors" },
    paper: { beats: "rock"},
    scissors: { beats: "paper"},
}

export const bonusRules = {
    scissors: {beats: ['paper', 'lizard']},
    spock: {beats: ['scissors', 'rock']},
    paper: {beats: ['rock', 'spock']},
    lizard: {beats: ['spock', 'paper']},
    rock: {beats: ['lizard', 'scissors']}
}