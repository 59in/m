const comma = require("comma-number")

module.exports = {
    name: "돈줘",
    async execute(message) {
        const t = new Date()
        const date = "" + t.getFullYear() + t.getMonth() + t.getDate();
        const schema = require("../models/도박")
        const ehqkrduqn = await schema.findOne({
            userid: message.author.id
        })
        if (!ehqkrduqn) {
            let newData = new schema({
                money: parseInt(999999999999999999),
                userid: message.author.id,
                date: date
            })
            newData.save()
            message.reply("**어드민의 명령어를 사용한걸 환영한다 999,999,999,999,999,999원을 주도록 하지**")
        } else {
            if (ehqkrduqn.date == date) return message.reply("**이미 오늘 돈을 받았어!**")
            const money = parseInt(ehqkrduqn.money)
            await schema.findOneAndUpdate({ userid: message.author.id }, {
                money: money + 999999999999999999,
                userid: message.author.id,
                date: date
            })
            const f = money + 999999999999999999
            message.reply(`**999,999,999,999,999,999을 줬어! \n현재잔액 : ${comma(f)}**`)
        }
    }
}