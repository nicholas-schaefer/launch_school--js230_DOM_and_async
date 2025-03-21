document.addEventListener("DOMContentLoaded", (event) =>{
  let teamList = document.querySelector('#team ul');
  teamList.addEventListener('click', (event)=>{

    class Profile{
      constructor(event){
        event.preventDefault();
        this.article = document.querySelector('article');
        this.anchor = event.target.closest('a');
        this.img = this.anchor.querySelector('img');
        this.profile = this.anchor.querySelector('span.profile');
        this.modalContainer = document.querySelector('#modal-container');
      }

      getProfileTextContent(){
        return this.profile.textContent;
      };

      getName(){
        return this.anchor.innerText;
      }

      getPicSrc(){
        return this.img.src;
      }

      createModal(){
        let div = document.createElement("div");
        div.id = "modal";

        let h3 = document.createElement("h3");
        h3.textContent = this.getName();

        let p = document.createElement("p");
        p.textContent = this.getProfileTextContent();

        let img = document.createElement("img");
        img.src = this.getPicSrc();

        div.append(img);
        div.append(h3);
        div.append(p);
        this.modalContainer.append(div);

        setTimeout(()=>div.classList.add("fade-in"), 0)
        setTimeout(()=>document.querySelector('main').classList.add("overlay"), 0)

        // div.classList.add("fade-in")
      }
    }
    const profile = new Profile(event);
    // console.log(profile.getProfileTextContent())
    profile.createModal()

  })
})