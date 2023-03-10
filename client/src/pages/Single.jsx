import React from 'react'
import { Link } from 'react-router-dom'
import img from '../img/img1.jpg'
import userImg from '../img/u1.jpg'
import Edit from '../img/edit1.png'
import Delete from '../img/del1.webp'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src={img} alt="" />
        <div className="user">
          <img src={userImg} alt="" />
          <div className="info">
            <span>Zafair</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write/edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu turpis vitae ligula sodales congue. Proin quis felis non risus sodales porttitor nec vel nunc. In vulputate mauris turpis, sed consequat quam cursus non. Aenean ac ex id nibh luctus dapibus sit amet sit amet diam. Nullam nec ullamcorper orci. Ut metus lacus, pharetra vel mi sed, commodo convallis eros. Nam sit amet ligula ipsum. Duis vestibulum, ante in accumsan dignissim, dolor nunc egestas risus, nec sollicitudin mi velit sit amet velit. Proin volutpat lorem lorem, eget laoreet ante dapibus sit amet. Pellentesque malesuada velit ut quam pulvinar dignissim. Morbi et dolor ultricies, imperdiet magna ut, dictum lacus. Duis pulvinar justo massa, rutrum sodales diam commodo nec. Donec sapien risus, laoreet sed lectus ut, pretium congue nulla. Nullam placerat semper libero. Aenean vestibulum orci non dolor vulputate, non posuere sem vehicula. In malesuada sagittis justo, molestie varius metus.
          <br /><br />

          Fusce malesuada, ligula at ornare luctus, libero est condimentum lectus, quis tempor mauris velit quis nisl. Etiam nec purus et lacus rhoncus auctor. Etiam non libero eros. Phasellus id vestibulum eros, ut dapibus felis. Cras in placerat ligula, a molestie velit. Donec vel quam ut urna dictum interdum efficitur ut neque. Aliquam tristique, lacus et cursus eleifend, mi lacus blandit nisl, ut scelerisque sem odio sit amet turpis. Etiam quis ante consequat, vestibulum metus a, dapibus metus. Nunc quam odio, convallis vel enim nec, bibendum mollis tortor. Nunc sodales hendrerit condimentum.
          <br /><br />

          Phasellus vehicula fermentum lorem sed mollis. Morbi eleifend laoreet dolor nec lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris et pellentesque lectus, ac semper nibh. Nam blandit, ligula id euismod facilisis, mauris sem dignissim nisl, ac porttitor est massa vel lacus. Aenean sem nulla, luctus accumsan odio eu, venenatis pellentesque diam. Quisque eu ornare turpis, id mattis nisl. Duis a hendrerit lacus. Nullam condimentum semper nulla, ac congue sem condimentum ac. Aenean id lorem erat.
          <br /><br />

          Phasellus iaculis et neque ut scelerisque. Fusce eget leo in ligula vulputate eleifend at mattis urna. Pellentesque vulputate risus ipsum, non imperdiet sem aliquam at. Praesent eu condimentum justo, non viverra nunc. Cras nec dui a sem consequat tincidunt. Nam tellus mauris, vulputate sed ullamcorper eleifend, hendrerit eget turpis. In gravida eros in maximus mattis. Nunc malesuada sem sem. Morbi eu neque fermentum, facilisis lectus quis, tempus est.
          <br /><br />

          Vivamus tempus sagittis tortor. Nulla et aliquet dolor, vitae pulvinar orci. Donec at neque et diam faucibus vehicula. Curabitur consectetur tortor ac mauris pretium feugiat. Etiam vitae sapien molestie, mollis augue non, posuere lectus. Quisque sed volutpat nunc. Aenean porttitor cursus iaculis. Sed lectus odio, euismod id velit vel, ornare iaculis mi. Vestibulum id condimentum orci. Cras dignissim rhoncus pharetra. Mauris id consequat erat, ut molestie augue. Integer quis porta dui. Quisque cursus massa condimentum est varius, in rutrum nisi rutrum. Donec aliquam bibendum ex. Fusce suscipit ante eget tellus luctus elementum.</p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  )
}

export default Single