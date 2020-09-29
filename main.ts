input.onPinPressed(TouchPin.P0, function () {
    if (Stay != 1) {
        if (_3rd_Card == not_set) {
            _3rd_Card = randint(1, 10)
        }
        if (_4th_card == not_set) {
            Player_cards = roll + _2ndCard + _3rd_Card
        }
        if (_3rd_Card == 10) {
            basic.showLeds(`
                # . . # .
                # . # . #
                # . # . #
                # . # . #
                # . . # .
                `)
        } else if (_3rd_Card == 9) {
            basic.showLeds(`
                . # # # .
                . # . # .
                . # # # .
                . . . # .
                . . . # .
                `)
        } else if (_3rd_Card == 8) {
            basic.showLeds(`
                . # # # .
                . # . # .
                . # # # .
                . # . # .
                . # # # .
                `)
        } else if (_3rd_Card == 7) {
            basic.showLeds(`
                . # # # .
                . . . # .
                . . . # .
                . . . # .
                . . . # .
                `)
        } else if (_3rd_Card == 6) {
            basic.showLeds(`
                . # # # .
                . # . . .
                . # # # .
                . # . # .
                . # # # .
                `)
        } else if (_3rd_Card == 5) {
            basic.showLeds(`
                . # # # .
                . # . . .
                . # # # .
                . . . # .
                . # # # .
                `)
        } else if (_3rd_Card == 4) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . # # # .
                . . . # .
                . . . # .
                `)
        } else if (_3rd_Card == 3) {
            basic.showLeds(`
                . # # # .
                . . . # .
                . # # # .
                . . . # .
                . # # # .
                `)
        } else if (_3rd_Card == 2) {
            basic.showLeds(`
                . # # . .
                . . . # .
                . # # # .
                . # . . .
                . # # # .
                `)
        } else {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                `)
        }
        basic.pause(1000)
        if (roll + (_2ndCard + _3rd_Card) > 21) {
            basic.showString("Bust!")
        }
        if (roll + (_2ndCard + _3rd_Card) == 21) {
            basic.showString("Black Jack!")
        }
    }
})
input.onButtonPressed(Button.A, function () {
    if (Stay != 1) {
        if (roll == 10) {
            basic.showLeds(`
                # . . # .
                # . # . #
                # . # . #
                # . # . #
                # . . # .
                `)
        } else if (roll == 9) {
            basic.showLeds(`
                . # # # .
                . # . # .
                . # # # .
                . . . # .
                . . . # .
                `)
        } else if (roll == 8) {
            basic.showLeds(`
                . # # # .
                . # . # .
                . # # # .
                . # . # .
                . # # # .
                `)
        } else if (roll == 7) {
            basic.showLeds(`
                . # # # .
                . . . # .
                . . . # .
                . . . # .
                . . . # .
                `)
        } else if (roll == 6) {
            basic.showLeds(`
                . # # # .
                . # . . .
                . # # # .
                . # . # .
                . # # # .
                `)
        } else if (roll == 5) {
            basic.showLeds(`
                . # # # .
                . # . . .
                . # # # .
                . . . # .
                . # # # .
                `)
        } else if (roll == 4) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . # # # .
                . . . # .
                . . . # .
                `)
        } else if (roll == 3) {
            basic.showLeds(`
                . # # # .
                . . . # .
                . # # # .
                . . . # .
                . # # # .
                `)
        } else if (roll == 2) {
            basic.showLeds(`
                . # # # .
                . . . # .
                . # # # .
                . # . . .
                . # # # .
                `)
        } else if (roll == 11) {
            basic.showLeds(`
                . # # # .
                . # . # .
                . # # # .
                . # . # .
                . # . # .
                `)
        } else {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                `)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (Stay != 1) {
        if (_3rd_Card == not_set) {
            Player_cards = roll + _2ndCard
        }
        if (_2ndCard == 10) {
            basic.showLeds(`
                # . . # .
                # . # . #
                # . # . #
                # . # . #
                # . . # .
                `)
        } else if (_2ndCard == 9) {
            basic.showLeds(`
                . # # # .
                . # . # .
                . # # # .
                . . . # .
                . . . # .
                `)
        } else if (_2ndCard == 8) {
            basic.showLeds(`
                . # # # .
                . # . # .
                . # # # .
                . # . # .
                . # # # .
                `)
        } else if (_2ndCard == 7) {
            basic.showLeds(`
                . # # # .
                . . . # .
                . . . # .
                . . . # .
                . . . # .
                `)
        } else if (_2ndCard == 6) {
            basic.showLeds(`
                . # # # .
                . # . . .
                . # # # .
                . # . # .
                . # # # .
                `)
        } else if (_2ndCard == 5) {
            basic.showLeds(`
                . # # # .
                . # . . .
                . # # # .
                . . . # .
                . # # # .
                `)
        } else if (_2ndCard == 4) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . # # # .
                . . . # .
                . . . # .
                `)
        } else if (_2ndCard == 3) {
            basic.showLeds(`
                . # # # .
                . . . # .
                . # # # .
                . . . # .
                . # # # .
                `)
        } else if (_2ndCard == 2) {
            basic.showLeds(`
                . # # . .
                . . . # .
                . # # # .
                . # . . .
                . # # # .
                `)
        } else {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                `)
        }
        basic.pause(1000)
        if (roll + _2ndCard == 21) {
            basic.showString("Black Jack!")
        }
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (Stay != 1) {
        if (_4th_card == not_set) {
            _4th_card = randint(1, 10)
        }
        Player_cards = roll + (_2ndCard + (_3rd_Card + _4th_card))
        if (_4th_card == 10) {
            basic.showLeds(`
                # . . # .
                # . # . #
                # . # . #
                # . # . #
                # . . # .
                `)
        } else if (_4th_card == 9) {
            basic.showLeds(`
                . # # # .
                . # . # .
                . # # # .
                . . . # .
                . . . # .
                `)
        } else if (_4th_card == 8) {
            basic.showLeds(`
                . # # # .
                . # . # .
                . # # # .
                . # . # .
                . # # # .
                `)
        } else if (_4th_card == 7) {
            basic.showLeds(`
                . # # # .
                . . . # .
                . . . # .
                . . . # .
                . . . # .
                `)
        } else if (_4th_card == 6) {
            basic.showLeds(`
                . # # # .
                . # . . .
                . # # # .
                . # . # .
                . # # # .
                `)
        } else if (_4th_card == 5) {
            basic.showLeds(`
                . # # # .
                . # . . .
                . # # # .
                . . . # .
                . # # # .
                `)
        } else if (_4th_card == 4) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . # # # .
                . . . # .
                . . . # .
                `)
        } else if (_4th_card == 3) {
            basic.showLeds(`
                . # # # .
                . . . # .
                . # # # .
                . . . # .
                . # # # .
                `)
        } else if (_4th_card == 2) {
            basic.showLeds(`
                . # # . .
                . . . # .
                . # # # .
                . # . . .
                . # # # .
                `)
        } else {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                `)
        }
        basic.pause(1000)
        if (_2ndCard + (roll + (_3rd_Card + _4th_card)) > 21) {
            basic.showString("Bust!")
        }
        if (roll + (_2ndCard + (_3rd_Card + _4th_card)) == 21) {
            basic.showString("Black Jack!")
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    Stay = 1
    basic.showString("stay")
    basic.showString("Dealer:")
    if (Dealers_cards == 22) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . # # #
            # . # . .
            # . # # #
            `)
        basic.pause(1000)
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # . #
            # . # . #
            # . # # #
            `)
        basic.pause(1000)
        basic.showString("Bust!")
        basic.showString("You Win!")
    } else if (Dealers_cards == 21) {
        basic.showLeds(`
            # # # . #
            . . # . #
            # # # . #
            # . . . #
            # # # . #
            `)
        basic.pause(1000)
        if (Player_cards == 21) {
            basic.showString("Tie!")
        } else {
            basic.showString("You Lose!")
        }
    } else if (Dealers_cards == 20) {
        basic.showNumber(20)
        basic.pause(1000)
        if (Player_cards > 20) {
            basic.showString("You win!")
        } else if (Player_cards == 20) {
            basic.showString("Tie!")
        } else {
            basic.showString("You loose!")
        }
    } else if (Dealers_cards == 19) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # # #
            # . . . #
            # . . . #
            `)
        basic.pause(1000)
        if (Player_cards > 19) {
            basic.showString("You Win!")
        } else if (Player_cards == 19) {
            basic.showString("Tie!")
        } else {
            basic.showString("You loose!")
        }
    } else if (Dealers_cards == 18) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # # #
            # . # . #
            # . # # #
            `)
        basic.pause(1000)
        if (Player_cards > 18) {
            basic.showString("You Win!")
        } else if (Player_cards == 18) {
            basic.showString("Tie!")
        } else {
            basic.showString("You Loose!")
        }
    } else if (Dealers_cards == 17) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            `)
        basic.pause(1000)
        if (Player_cards > 17) {
            basic.showString("You Win!")
        } else if (Player_cards == 17) {
            basic.showString("Tie!")
        } else {
            basic.showString("You Loose!")
        }
    } else if (Dealers_cards == 16) {
        basic.showLeds(`
            # . # # #
            # . # . .
            # . # # #
            # . # . #
            # . # # #
            `)
        basic.pause(1000)
        if (Player_cards > 16) {
            basic.showString("You Win!")
        } else if (Player_cards == 16) {
            basic.showString("Tie!")
        } else {
            basic.showString("You Loose!")
        }
    } else if (Dealers_cards == 15) {
        basic.showLeds(`
            # . # # #
            # . # . .
            # . # # #
            # . . . #
            # . # # #
            `)
        basic.pause(1000)
        if (Player_cards > 15) {
            basic.showString("You Win!")
        } else if (Player_cards == 15) {
            basic.showString("Tie!")
        } else {
            basic.showString("You Loose!")
        }
    } else {
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # # #
            # . . . #
            # . . . #
            `)
        basic.pause(1000)
        if (Player_cards > 14) {
            basic.showString("You Win!")
        } else if (Player_cards == 14) {
            basic.showString("Tie!")
        } else {
            basic.showString("You Loose!")
        }
    }
})
let Player_cards = 0
let Stay = 0
let Dealers_cards = 0
let _4th_card = 0
let not_set = 0
let _3rd_Card = 0
let _2ndCard = 0
let roll = 0
roll = randint(1, 11)
_2ndCard = randint(1, 10)
_3rd_Card = not_set
_4th_card = not_set
Dealers_cards = randint(14, 22)
Stay = 0
