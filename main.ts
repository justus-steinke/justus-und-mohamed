input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (Sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.pause()
    }
})
input.onGesture(Gesture.Shake, function () {
    Augenzahl = 0
    Augenzahl += randint(0, 2 + 1)
    if (Augenzahl == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        Augenzahl = 1
    } else if (Augenzahl == 2) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . . .
            . # . . .
            . . . . .
            `)
        Augenzahl = 2
    } else if (Augenzahl == 3) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . .
            . # . . .
            . . . . .
            `)
        Augenzahl = 3
    }
})
let Augenzahl = 0
let Sprite: game.LedSprite = null
Sprite = game.createSprite(2, 2)
basic.forever(function () {
	
})
basic.forever(function () {
    if (Augenzahl == 1) {
        game.resume()
    }
    while (Augenzahl == 1) {
        Sprite.move(1)
        basic.pause(100)
        Sprite.ifOnEdgeBounce()
    }
})
basic.forever(function () {
    while (Augenzahl == 2) {
        music.playMelody("F G D A C F E B ", 333)
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playMelody("C D E F F E D C ", 311)
        music.playMelody("C5 B A G G A B C5 ", 274)
        basic.showIcon(IconNames.EigthNote)
        basic.pause(100)
        basic.showIcon(IconNames.QuarterNote)
        game.pause()
    }
})
basic.forever(function () {
    while (Augenzahl == 3) {
        basic.showString("Das ist unser Calliope Projekt ")
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.Heart)
        game.gameOver()
    }
})
