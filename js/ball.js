class Ball{

    constructor(ctx, gameSize) {
        this.ctx = ctx
        this.randomSize = Math.random() * 200
        this.ballSize = { w: this.randomSize, h: this.randomSize }
        this.ballPos = { x: 0, y: Math.random() * gameSize.h - this.ballSize.h }
        // this.ballVel = { x: 10, y: 2 }
        this.ballVel = { x: Math.random() * 10, y: 2 }
        this.ballPhysics = {gravity: 0.3}
        
        this.gameSize = gameSize

        this.imageInstance = undefined

        this.init()

    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'img/ball.png'
    }

    draw() {
        this.move()
        this.ctx.drawImage(this.imageInstance, this.ballPos.x, this.ballPos.y, this.ballSize.w, this.ballSize.h)
    }

    move() {

        if (this.ballPos.y >= this.gameSize.h - this.ballSize.h) this.invertVelY()
        if (this.ballPos.x >= this.gameSize.w - this.ballSize.h) this.invertVelX()

        this.ballPos.x += this.ballVel.x
        this.ballVel.y += this.ballPhysics.gravity
        this.ballPos.y += this.ballVel.y
    }

    invertVelX() {
        this.ballVel.x *= -1
    }

    invertVelY() {
        this.ballVel.y *= -1
    }



}