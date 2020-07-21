// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    nickName: cc.Node;
    

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {
        
    // }

    start () {


    }


    getImageRes(node, url, name) {
        cc.loader.loadRes(url, cc.SpriteAtlas, (_err, atlas) => {
          node.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(name)
        })
        //console.log(name);
    }

  

    clickSubmitNickName(){
        var nickName = this.nickName.getChildByName("TEXT_LABEL").getComponent(cc.Label).string
        
        var regex = /[A-Za-z0-9]{1,16}/;
        if (nickName == "" ||nickName == null) {
           alert("Name must be filled out");
           return false;
         }
         if(nickName.length>16){
           alert("Name character mustn't be over 16 characters");
           return false;
         }
         if(!nickName.match(regex)){
           alert("Don't use special character allow A-Z,a-z,0-9");
           return false;
         }
        localStorage.setItem("nickname", nickName);
        console.log(nickName)
        cc.director.loadScene("second");
   }
    // update (dt) {}
}
