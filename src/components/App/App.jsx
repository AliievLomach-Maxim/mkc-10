import { useLanguageContext } from '../../context/LanguageContextProvider'
import { langContext } from '../../LangContext'
import Modal from '../Modal/Modal'

const App = () => {
  const { language } = useLanguageContext()
  const some = useContext(langContext)
  console.log('some', some)
  return (
    <div>
      <h1>{language}</h1>
      <Modal>some</Modal>
    </div>
  )
}

export default App

import { useContext } from 'react'
// import { useRef, useState } from 'react'

// const App = () => {
//   // const [counter, setCounter] = useState(0)

//   // const counterRef = useRef(0)
//   // let counterVar = 0

//   // const handleClick = () => {
//   //   counterRef.current++
//   //   counterVar++i
//   //   console.log('Update counterRef', counterRef.current)
//   //   console.log('Update counterVar', counterVar)
//   // }
//   // console.log('counterRef', counterRef.current)
//   // console.log('counterVar', counterVar)

//   const [isShowTimer, setIsShowTimer] = useState(false)

//   return (
//     <div>
//       {/* <button onClick={handleClick}>{counterRef.current}</button>
//       <hr />
//       <hr />
//       <hr />
//       <button onClick={() => setCounter(counter + 1)}>{counter}</button> */}
//       <button onClick={() => setIsShowTimer(!isShowTimer)}>{isShowTimer ? 'Hide' : 'Show'}</button>
//       {isShowTimer && <Timer />}
//     </div>
//   )
// }

// export default App

// import { useRef } from 'react'

// const App = () => {
//   // const myRef = useRef()
//   // console.log('myRef', myRef)
//   // const handleFocus = () => {
//   //   // const input = document.querySelector('')
//   //   myRef.current.focus()
//   // }
//   const inputRef = useRef()
//   const handleScroll = () => {
//     const diffToTop = inputRef.current?.getBoundingClientRect().top
//     // console.log(inputRef.current?.getBoundingClientRect())
//     scrollTo({
//       top: diffToTop,
//       behavior: 'smooth',
//     })
//   }
//   return (
//     <div>
//       {/* <button onClick={handleFocus}>Focus</button> */}
//       <button onClick={handleScroll}>Scroll to input</button>

//       <p>
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur dolores quia rem officia
//         facere id suscipit nam reiciendis accusantium doloremque! Dolores temporibus et officiis
//         iusto eos quis quam est incidunt? Provident nesciunt aut molestias blanditiis ipsa velit
//         dolore error omnis, libero quas exercitationem veniam, eligendi accusamus illo itaque
//         suscipit unde iste quisquam quos odit, sunt vel maxime! Unde, expedita obcaecati? Nam odio
//         veniam facilis enim corporis ipsum earum velit? Saepe assumenda, atque distinctio mollitia
//         neque molestiae, non quibusdam, reprehenderit numquam voluptas inventore nostrum sequi ut
//         dignissimos error voluptates ratione aperiam? Quibusdam deleniti id autem quam fugiat omnis
//         vitae, quae eveniet consectetur unde quod quia perspiciatis itaque vel temporibus
//         exercitationem iusto ullam quo ex, eius tempora repellendus. Dolorum facere alias quaerat?
//         Nemo accusantium esse voluptatibus ea magni odio nisi quos sapiente qui, alias assumenda
//         consectetur aut nostrum, enim quam suscipit? Voluptatem numquam est tempora officia
//         inventore deleniti aut eius rem fugiat? Amet quisquam tempora hic quas itaque consequuntur
//         veniam nulla incidunt dolorum aperiam? Assumenda neque error maxime nostrum enim nisi non
//         illo dicta itaque necessitatibus veritatis inventore, et quia ullam quisquam! Aspernatur,
//         officiis autem amet magni assumenda tempora impedit sed ab nostrum et sint laudantium minus
//         facere rerum magnam veritatis culpa, dolorum expedita quo quas voluptate animi nihil? In,
//         minima vel. Perferendis debitis beatae accusamus, optio, accusantium voluptas illum soluta
//         veritatis eos saepe ad illo quo. Dicta sed exercitationem temporibus nisi iure fuga
//         possimus, eveniet aspernatur. Tenetur corporis et vitae eligendi. Temporibus tempore
//         excepturi voluptatum necessitatibus aliquid error, praesentium dolore possimus fugit cum
//         nostrum voluptatem ipsam fugiat voluptates ipsa fuga iste rem, perferendis libero dolorem!
//         Praesentium, porro autem. Minus, hic architecto. Adipisci illum mollitia nemo quisquam nisi
//         commodi. Accusantium, mollitia, rem a officia ratione ducimus magnam nobis velit eveniet
//         minus pariatur eaque neque! Magnam impedit veritatis, eum at cumque nulla ratione. Hic vitae
//         et reprehenderit assumenda odit nihil deserunt ea odio exercitationem amet iure architecto
//         accusantium eveniet blanditiis quisquam ducimus, temporibus, harum itaque minima dolores!
//         Voluptas laudantium blanditiis sapiente obcaecati tempora! Dicta esse ipsa et rem cupiditate
//         animi sequi harum, voluptatem doloremque neque reprehenderit sed modi amet, at quisquam
//         maxime cum illum temporibus eligendi accusamus repellat ad quibusdam! Dolore, consequuntur
//         doloribus. Accusamus, tempora itaque excepturi mollitia quia qui quisquam eveniet ipsa
//         perspiciatis incidunt omnis enim aspernatur ut repellat, soluta quis sint magnam fugiat
//         voluptatibus atque, id recusandae fuga? Consequuntur, quam repellat. Eos architecto,
//         voluptate temporibus vero autem reiciendis inventore atque assumenda aut? Incidunt molestiae
//         accusantium assumenda laboriosam provident placeat excepturi, perspiciatis id nobis
//         cupiditate rem quam dignissimos itaque impedit, sed ad. Quia qui dolor quae eos, illo
//         numquam molestiae dolores ea cum. Non numquam perspiciatis quasi explicabo ab necessitatibus
//         ratione recusandae quos accusantium illum, alias eum? Placeat explicabo illo aliquam
//         tempora. Animi eos, vitae optio mollitia dolorum sit pariatur. Quis dolores, incidunt
//         voluptate doloribus vel rem cumque facilis laborum veritatis quaerat, corrupti accusamus ab
//         aliquid officia! Impedit porro unde quasi suscipit. In nostrum provident eligendi, doloribus
//         pariatur sequi ut corporis neque beatae magnam, tempora cupiditate et, qui libero maiores?
//         Sequi nihil explicabo eveniet ex deserunt, quia assumenda a voluptatem quo pariatur!
//         Aspernatur accusamus nesciunt saepe laudantium optio placeat voluptates quos, harum sit
//         quidem magni fuga at iusto quo. Veritatis molestiae ducimus veniam dolores, blanditiis
//         suscipit voluptate sequi dicta sapiente iusto aliquam. Itaque, in ipsa laboriosam ratione
//         architecto soluta ducimus, alias a cum laudantium est voluptas iure nesciunt vitae incidunt
//         perspiciatis dignissimos officiis, cumque unde impedit delectus commodi possimus?
//         Aspernatur, nulla placeat? Excepturi blanditiis iste nemo voluptas, temporibus porro soluta
//         dicta repellendus voluptate modi aperiam at consectetur, a illum distinctio ipsum harum
//         provident asperiores atque pariatur aliquam cumque, alias velit dolor. Dicta? Quis ea
//         repudiandae eum. Beatae libero excepturi nam et maxime. Fugiat tenetur, impedit doloribus
//         ipsa sed iure exercitationem repellendus sequi, corporis nobis consectetur provident in
//         repudiandae, quo quis facere necessitatibus. Error enim recusandae vitae repellat expedita
//         possimus obcaecati natus magni debitis, eos numquam quidem delectus assumenda id iste, ipsam
//         excepturi sapiente voluptas fugit porro voluptatum similique ratione? Minima, aperiam
//         reprehenderit! Sit minus, quis asperiores consectetur architecto repellat perferendis
//         similique tenetur enim labore earum magnam, qui doloribus esse dignissimos officiis quod
//         nihil ad provident nulla soluta odio corrupti, error fugiat. Dignissimos. Assumenda,
//         perferendis sapiente explicabo voluptatibus tempore enim corrupti ducimus expedita beatae
//         incidunt maiores sed hic blanditiis eos voluptate suscipit eveniet cum veritatis, ullam,
//         obcaecati deserunt commodi dolorem tempora quas. Eligendi? Quae quas ipsam voluptatem
//         ratione nesciunt repellat magnam, distinctio unde nisi cupiditate, labore fugit sint?
//         Voluptatum laudantium neque ipsum vel voluptate facilis beatae dolores, sed corrupti, amet a
//         eaque accusamus. Magni beatae ipsa quam dolore nihil similique voluptatem dolorem harum
//         blanditiis sequi sint numquam quae facilis, ducimus perspiciatis aspernatur quos. Voluptates
//         officiis reiciendis dolorum repellendus, praesentium explicabo repudiandae quis doloremque.
//         Nulla culpa soluta harum, optio nesciunt, unde ducimus earum praesentium repellendus minima
//         vero labore voluptatibus omnis nam ipsum nemo. Dolorem ab beatae consequatur pariatur neque
//         ipsa tempora ea praesentium quisquam. Cumque doloremque minus eaque aperiam inventore
//         similique minima atque veniam aliquid eius, officia eos quam aut ab? Voluptas, temporibus
//         voluptatum nemo optio blanditiis unde corporis reiciendis accusantium vitae dignissimos
//         ratione. Unde, ratione? Aut ea exercitationem inventore omnis tenetur adipisci soluta
//         officia dignissimos. Pariatur possimus doloremque porro commodi fugiat doloribus corrupti
//         amet, omnis incidunt soluta officiis repellendus assumenda totam, ex nulla. Dignissimos
//         harum earum inventore ut rerum. Eos, voluptas cupiditate sapiente amet, officia et
//         distinctio tempore assumenda laboriosam molestias ea natus odio repellendus! Natus fuga
//         expedita ex optio sunt voluptatum alias? Aperiam numquam maiores ex fugit, corrupti omnis
//         provident nemo, aut facilis aliquam eveniet voluptas nostrum nam amet. Hic accusantium et
//         odit asperiores unde vel architecto culpa, quos ad doloribus corporis! Sit soluta dicta eius
//         esse molestias ipsa et officiis repellat quam. Iure ut magni debitis omnis necessitatibus
//         cumque expedita libero similique, aliquam, a quibusdam error officiis tempore suscipit
//         labore delectus! Molestias mollitia consectetur quas, veniam libero omnis facere illo
//         voluptatum quam non, inventore modi id. Distinctio deleniti neque sint vero eaque ad eum
//         tempore cum impedit, iure iste quo ipsam! Adipisci blanditiis laboriosam expedita magnam
//         unde ullam voluptatem facere modi dignissimos nisi quae sapiente, delectus sit itaque quod,
//         inventore nam excepturi animi molestiae? Magnam, obcaecati asperiores in saepe vel dolorum.
//         Autem, tempora dicta libero sapiente, labore perferendis iusto neque quod, repudiandae ex
//         dolor? Pariatur distinctio placeat quis nulla maiores, iure odit eius facilis repudiandae
//         dicta id beatae debitis hic molestiae. Dicta quidem provident excepturi cupiditate deserunt
//         fugit autem illum earum deleniti sint magnam similique, voluptatum a porro. Optio voluptatem
//         ipsa quas, aliquam iste rerum natus ipsam fugit animi, sapiente totam! Repellendus aliquam
//         aperiam ad debitis natus, nemo ullam saepe minus inventore corporis temporibus possimus
//         porro rem libero soluta hic molestias eum! Cum harum alias, impedit architecto quae error.
//         Earum, nesciunt? Iusto officia, voluptas atque praesentium vero, velit autem ipsa, vitae
//         veritatis dolor aspernatur? Sunt pariatur veniam libero corrupti? Hic, voluptates. Magnam
//         beatae vero deleniti ad velit fuga, quod eveniet animi. Sequi iste deleniti eveniet repellat
//         laudantium deserunt quam optio officiis maiores dolorum. Ipsa nulla sit assumenda doloribus
//         provident ullam libero consectetur iusto, nostrum, architecto beatae itaque qui. Ex, velit
//         quas. Sit consectetur iusto corrupti, vel hic vitae, adipisci eos porro laboriosam, quae
//         reprehenderit dignissimos possimus placeat unde a? Eius numquam necessitatibus incidunt
//         velit dolorem amet voluptatum maxime molestiae obcaecati quasi! Nihil rem dignissimos itaque
//         consequatur minima maiores debitis quis incidunt ducimus veniam neque magni fugit enim
//         repudiandae autem esse quidem, laborum eveniet qui nobis maxime animi aspernatur. Nulla,
//         incidunt inventore. Et numquam, saepe cum cupiditate eligendi accusantium, illum distinctio,
//         libero porro reiciendis commodi id inventore repellendus molestias quisquam hic sapiente sit
//         ipsum aliquid voluptatibus ut quasi ad laborum amet. Natus. Expedita iure provident hic
//         nihil officia odio, earum et commodi, itaque, tempore minus debitis voluptas aspernatur
//         quibusdam fugit saepe laudantium enim! Inventore, quo sequi nobis doloribus molestias nam
//         facere soluta. Ex nesciunt nulla, adipisci molestias reiciendis sed quae saepe eveniet
//         tempora voluptate accusamus blanditiis quaerat impedit ad quasi! Architecto, fugit. Dolorum
//         ex, adipisci atque esse minus repudiandae distinctio itaque autem. Soluta, tempora tempore!
//         Reiciendis optio aspernatur eligendi harum! Est, aliquid autem. Possimus consequuntur
//         incidunt architecto omnis fugiat minus voluptatibus quas, voluptatem corrupti tempora,
//         labore minima porro ut. Eveniet, quos nihil! Sint eligendi assumenda vero earum quibusdam,
//         corporis nemo quod suscipit tenetur odio beatae magnam velit temporibus dolorem quae!
//         Expedita, cumque. Eaque, quae sunt. Nulla possimus corporis placeat cupiditate molestiae
//         sed? Totam quas adipisci cupiditate perferendis hic! Nesciunt vitae accusantium excepturi
//         nobis in. Omnis, a. Labore, error atque eaque ullam distinctio corrupti adipisci tenetur
//         possimus voluptatibus cumque mollitia repudiandae, officiis laboriosam! Debitis fuga,
//         laboriosam ipsum mollitia id quisquam voluptate libero facilis necessitatibus maxime, iste
//         tenetur reprehenderit quo voluptatum quis sunt accusamus nihil porro totam deleniti.
//         Voluptatibus pariatur soluta corrupti incidunt expedita. Architecto, voluptates.
//         Consectetur, animi! Eius sequi voluptatem id adipisci ullam quos ipsam autem voluptatum
//         repellendus cumque voluptates neque ab sunt ipsum officia ea incidunt labore cupiditate eos,
//         dicta nulla repellat? Ducimus mollitia veritatis tenetur ipsum cum suscipit, quod totam
//         molestias dolore, culpa quaerat voluptatum. Quae, rerum qui unde quisquam ad molestias,
//         tempore, reiciendis iure nesciunt pariatur incidunt modi laudantium aliquid? Quidem illum
//         eveniet mollitia enim dolore sunt iusto quam laboriosam exercitationem ipsum repellendus
//         voluptates rerum fugiat, voluptate culpa voluptatibus praesentium sit quis adipisci
//         repudiandae, quisquam, sed facilis blanditiis. Rem, asperiores! Dignissimos laborum officia
//         laudantium, quidem hic libero beatae perspiciatis dolor accusamus odit et voluptates commodi
//         laboriosam modi amet consequatur necessitatibus consectetur, sunt doloribus praesentium.
//         Odit natus nobis amet totam aperiam. Beatae incidunt voluptatum iure autem explicabo itaque
//         voluptatibus voluptatem tenetur quis cupiditate et sunt rerum quae magni magnam eos at nam
//         esse quibusdam expedita perspiciatis quod dicta, atque recusandae? Ipsam. Error explicabo
//         ullam in maxime quaerat quasi qui perferendis sequi consectetur porro. Veritatis pariatur
//         blanditiis sapiente reiciendis tenetur consequuntur. Aut neque mollitia expedita totam
//         debitis nostrum nemo, deleniti fuga aliquam! Eos quos veniam amet ad ut libero dolores totam
//         magnam temporibus architecto! Incidunt id voluptatibus architecto, reiciendis consequatur
//         eligendi veritatis, obcaecati quae, aliquid illum quis distinctio! Laudantium error aliquid
//         autem. Ipsam nulla consequatur ipsa hic eaque natus voluptate architecto placeat impedit.
//         Aliquam sequi quos similique asperiores necessitatibus accusamus sit dolorum, neque ad
//         excepturi quam assumenda, earum eius cumque optio corrupti! Vitae eum laboriosam asperiores
//         quas possimus natus labore totam architecto blanditiis et omnis quia ut doloremque, eaque
//         nesciunt iusto ad accusantium provident sint odio est repudiandae deleniti numquam atque.
//         Maxime. Vitae soluta laborum ab. Enim, iste eaque? Sit esse possimus eaque molestias, beatae
//         animi itaque saepe cum repudiandae, porro aliquid est obcaecati nulla nam optio perferendis
//         illo vero sunt maiores? Debitis molestiae itaque, labore, quos dolore nihil veniam a
//         consequatur saepe nulla, omnis fugit earum consectetur suscipit sit reprehenderit minima ea
//         incidunt! Dolorum sed corrupti harum, nostrum eum unde necessitatibus? Exercitationem modi
//         obcaecati sint, reiciendis ut repudiandae unde. Tenetur, dolorum autem beatae natus
//         reprehenderit veritatis praesentium in obcaecati consequuntur! Saepe nobis est, porro vero
//         aliquam dolores quae veniam assumenda autem. Saepe iusto sed vel asperiores consequuntur
//         itaque, sapiente id harum accusantium ullam reiciendis maiores cupiditate similique, aliquam
//         dolore! Ducimus saepe sunt ab tenetur molestias? Ex dolorem earum est voluptatem laudantium!
//         Dignissimos, autem esse aliquid nam repellendus cum fugit ullam iste numquam assumenda
//         explicabo voluptate quos dolor, magnam repudiandae excepturi odit suscipit minima voluptatum
//         quis provident. Temporibus repudiandae fugit accusantium quos. Cumque aperiam nulla corporis
//         id necessitatibus placeat, pariatur suscipit consectetur enim adipisci eum deleniti? Animi
//         laudantium reprehenderit, assumenda a necessitatibus aut rerum odit similique tempora eius?
//         Quas totam iusto aliquam. Sequi voluptate explicabo, commodi doloremque harum eos laboriosam
//         officiis accusamus voluptas reiciendis, est id voluptatibus facere qui nam illum, tenetur
//         sint hic veritatis dolorem odit ex exercitationem! Nobis, illum. Deleniti. Ducimus, aliquid.
//         Quia sit quasi laudantium voluptatum exercitationem, nisi, quis facilis neque delectus autem
//         vitae debitis unde, nostrum doloremque at soluta optio praesentium officiis ab quidem fugit.
//         Error, eligendi earum. Aut, non eaque. Beatae ducimus ad debitis dolores voluptate sint,
//         quaerat ratione nostrum voluptas error officia sapiente quod tempora neque excepturi, rem
//         vel laboriosam atque itaque? Aut mollitia ipsam harum. Nulla dolorum, tempora nesciunt
//         tenetur repellendus alias neque veritatis, minima perferendis repudiandae assumenda. Nobis
//         explicabo provident, iste labore, harum praesentium in quos laborum consectetur ullam
//         deleniti? Praesentium veniam omnis eveniet! Optio cupiditate aperiam similique
//         exercitationem. Ipsum sit praesentium culpa corrupti illum, iste vel quo quas! Dolorem
//         recusandae qui ipsum, doloremque accusantium iste veritatis incidunt reprehenderit est
//         delectus iusto asperiores autem? Consectetur delectus voluptatum quidem laudantium iste
//         quasi dolore consequatur, praesentium sed a? Possimus cumque recusandae deleniti
//         praesentium, nisi, quis quidem, impedit eos vitae esse cupiditate ab similique voluptate
//         quod nihil! Laudantium eius quia sapiente voluptatibus dolores autem praesentium! Voluptates
//         reprehenderit sapiente labore dolor culpa ipsa in libero error, laborum assumenda id
//         aspernatur voluptatum a, minima impedit odio minus adipisci pariatur. Earum illum eius
//         ducimus amet, tenetur sint maiores aspernatur cum nisi magnam quos quod itaque, officiis quo
//         quasi nemo unde! Sunt quibusdam nemo quas dolorem sed vero itaque libero voluptatum. Magni
//         corrupti minima incidunt modi commodi vel veritatis provident optio, illum enim omnis
//         repudiandae neque at reiciendis soluta fugiat sint iure ratione molestiae odit nam porro
//         aperiam possimus! Nostrum, nemo. Laudantium voluptas, ab eos corporis magnam nam! Eos
//         similique perspiciatis sapiente! Dolorum commodi facilis rem rerum optio laudantium
//         corporis. In pariatur incidunt dolorem dolorum eaque harum aut beatae labore quia. Alias
//         provident dolore rerum dolores est qui itaque aperiam consectetur corporis enim quia
//         distinctio cum maiores fugiat, repellendus, reiciendis molestiae, dignissimos commodi
//         aliquam ut aspernatur et minus delectus facere. Exercitationem! Recusandae repellat quisquam
//         accusamus, atque impedit minus nam veniam eaque? Totam, ea culpa aperiam voluptate, aliquam
//         dolorem veritatis cum maxime itaque recusandae rem reprehenderit autem, ut nihil
//         consequuntur accusantium officia! Recusandae libero, eaque vero eveniet rem quis non ut
//         culpa iusto earum impedit unde aut, ex ab mollitia aperiam? Delectus, nam sequi quae eum
//         neque odit quibusdam veniam excepturi enim! Repellat, repellendus rem? Ad praesentium aut
//         unde quo necessitatibus, deserunt qui numquam omnis minus voluptates optio ipsa nam vitae
//         dolorum? Tempora minima id nam maiores eius! Quibusdam voluptas hic officiis? Rem recusandae
//         dolorum quia culpa commodi consectetur dignissimos dolorem aliquid dolores inventore, facere
//         incidunt! Id, ratione doloribus pariatur repudiandae dignissimos animi qui aperiam
//         recusandae minus modi. Alias possimus facere qui. Praesentium cupiditate dolorum veniam sunt
//         vitae maxime! Nesciunt magni corrupti quas expedita modi id, incidunt eligendi dolorem
//         voluptates tempore necessitatibus odit eius ab repellendus, reprehenderit aperiam qui quasi
//         tempora? Totam! Placeat quia quibusdam, fugiat voluptate vitae porro cumque incidunt vel
//         excepturi deleniti, quod odit ex, quo maiores voluptas adipisci? Sequi alias blanditiis
//         minus, excepturi neque nostrum velit harum autem cumque! Debitis sequi nam alias sint libero
//         ut est molestiae natus, tenetur, minima, earum ex eaque ipsa nulla fuga accusantium
//         consectetur cumque a odio impedit recusandae similique provident soluta voluptates.
//         Laboriosam. Assumenda tenetur sunt officiis reiciendis eius, ipsum quas est cum quibusdam
//         expedita eveniet perspiciatis voluptate dicta iste dolorum incidunt vero doloribus eligendi
//         eaque? Non nostrum nobis perferendis nulla quaerat ipsa. Voluptate, dicta possimus
//         reiciendis facilis quia enim libero tempore, debitis numquam pariatur laborum molestias
//         harum? Mollitia ratione aspernatur dolorem saepe eius, dolore doloribus est iure asperiores
//         tenetur suscipit quaerat neque. Dolorum cum commodi eius, maxime, quisquam similique
//         doloremque porro delectus magnam quam, dignissimos tempore. Repellat quod voluptates
//         adipisci saepe beatae velit neque quasi magnam nam eos iste, officia optio sequi. Cumque
//         dicta, nam quibusdam corrupti delectus saepe eius quaerat placeat exercitationem quas error,
//         alias quisquam reiciendis natus sint ipsam! Magnam, architecto quia? Laborum accusantium
//         ipsam in ea quas, expedita neque. Aliquam quisquam numquam ab repellendus iusto placeat,
//         eligendi consequuntur assumenda voluptatem ipsum consectetur, corrupti laborum tempore!
//         Mollitia perspiciatis, eaque, iure cumque dolorem aspernatur assumenda debitis nam corporis
//         rem ratione molestias. Quidem quae eius ut aut sint, repudiandae velit deserunt libero
//         earum, corrupti consequatur maxime! Veritatis, et amet facilis error laboriosam natus hic
//         eos aliquid excepturi quasi suscipit alias quam debitis? Laborum libero doloribus ab
//         doloremque vel dignissimos illo quasi obcaecati nisi? Ipsa eligendi voluptatibus repellendus
//         delectus, sit nihil rem nesciunt adipisci dignissimos sapiente nemo, consectetur odit
//         assumenda temporibus nulla est. Ex, minus sequi vel dolorem architecto ad nisi et, quidem
//         laborum asperiores fuga explicabo praesentium voluptatum. Dolor natus, exercitationem
//         aperiam non placeat reprehenderit officia omnis minima quis maxime, animi iure. Neque eius,
//         illum veniam dolores distinctio, quasi, voluptates harum modi asperiores impedit molestiae
//         nobis perferendis a amet voluptatum quod? Facere nihil distinctio ut eum dolore deleniti
//         tempore facilis obcaecati officia. Temporibus, quas. Amet recusandae quasi sit impedit.
//         Animi tempore dolor numquam hic! Consequatur, maiores. Et reiciendis ex fuga fugit beatae
//         laboriosam! Odit veniam explicabo corrupti unde quae aliquid aperiam! Saepe. Libero omnis
//         molestias aut ex, autem magnam ab error eius doloribus. Possimus itaque, facilis, numquam
//         totam perferendis consequatur obcaecati, soluta inventore voluptates deleniti placeat saepe
//         sequi consequuntur impedit autem eos. Molestiae culpa assumenda, consequuntur iste quia,
//         omnis provident, blanditiis eaque quae repudiandae ipsum. Ducimus nihil aspernatur corrupti
//         totam aperiam quas aliquam, consequuntur eos error quo voluptatibus deserunt architecto
//         dolores modi! Dignissimos repellat molestias magni labore excepturi eligendi blanditiis
//         perferendis modi tempora ut quasi inventore reprehenderit doloremque ratione facilis,
//         accusantium corporis nulla autem, quaerat culpa, ea minima. Cupiditate molestias recusandae
//         perferendis! Consequuntur velit ut quam dolore ex quidem incidunt officiis eius natus a
//         deserunt corrupti consequatur deleniti mollitia iste perspiciatis explicabo voluptas, nobis
//         sunt culpa quas accusamus. Id facere blanditiis placeat. Explicabo nihil voluptatibus
//         aspernatur mollitia et vitae, cupiditate repudiandae, veritatis, voluptates omnis sapiente
//         labore repellendus? Corporis sint eos tenetur pariatur, quasi accusantium officia in sed nam
//         autem nemo fuga dicta. Rem repellat est dicta magnam et nemo totam! Assumenda, qui quaerat
//         iste rem vitae reprehenderit dolor quas. Illum reiciendis, voluptas vel, praesentium
//         laborum, aliquam id voluptatum quos quis at optio! Similique soluta, sed iste aliquam neque
//         ratione adipisci, minus aperiam harum maxime magni laudantium expedita optio veniam
//         voluptatem omnis porro dolorum animi blanditiis, voluptates unde vitae. Itaque doloremque
//         veritatis dolorem. Possimus, voluptates explicabo laborum et tempora cumque commodi dicta
//         temporibus placeat qui labore cupiditate, dolorum tempore sapiente adipisci maiores rem
//         suscipit officiis ut iure velit deleniti ipsam nesciunt quae. Dolorum. Enim amet illum
//         cupiditate corporis unde aperiam optio. Distinctio doloremque eaque sint atque sed
//         perferendis facere accusantium velit libero ab! Dolor aliquam possimus quia vero veritatis,
//         explicabo necessitatibus adipisci impedit.
//       </p>
//       {/* <input type='text' ref={myRef} /> */}
//       <input type='text' ref={inputRef} />
//     </div>
//   )
// }

// export default App
// import { useCallback, useMemo, useState } from 'react'

// const App = () => {
//   const [a, setA] = useState(0)
//   const [b, setB] = useState(0)
//   const [c, setC] = useState(0)

//   const [users, setUsers] = useState([
//     { name: 'Alex', id: 1 },
//     { name: 'Alex', id: 2 },
//     { name: 'Alex', id: 3 },
//     { name: 'Alex', id: 4 },
//   ])
//   const [filter, setFilter] = useState('')

//   const result = useMemo(() => {
//     const totalAB = a + b
//     console.log('Calculate A + B')
//     return totalAB
//   }, [a, b])

//   // const filteredUsers = users.filter((user) => {
//   //   console.log('Filtering users...')
//   //   return user.name.toLowerCase().includes(filter.toLowerCase())
//   // })
//   const filteredUsers = useMemo(() => {
//     return users.filter((user) => {
//       console.log('Filtering users...')
//       return user.name.toLowerCase().includes(filter.toLowerCase())
//     })
//   }, [filter, users])

//   // const someFn = useCallback(() => {}, [])
//   // useEffect(() => {
//   //   someFn()
//   // }, [someFn])
//   // someFn()

//   // useCallback
//   return (
//     <div>
//       <input
//         type='text'
//         placeholder='search by name'
//         value={filter}
//         onChange={({ target: { value } }) => setFilter(value)}
//       />
//       {filteredUsers.map((user) => (
//         <p key={user.id}>{user.name}</p>
//       ))}
//       <button onClick={() => setA(a + 1)}>Update state A</button>
//       <button onClick={() => setB(b + 1)}>Update state B</button>
//       <button onClick={() => setC(c + 1)}>Update state C</button>
//       <h2>{result}</h2>
//     </div>
//   )
// }

// export default App
// import { useEffect, useState } from 'react'
// import ArticleList from '../ArticleList/ArticleList'
// import { getArticles } from '../../api/articles-api'
// import SearchArticlesForm from '../SearchArticlesForm/SearchArticlesForm'
// import toast from 'react-hot-toast'
// import Counter from '../Counter/Counter'
// import Timer from '../Timer/Timer'

// const App = () => {
//   const [articles, setArticles] = useState([])
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState(false)
//   const [page, setPage] = useState(1)
//   const [searchValue, setSearchValue] = useState('')

//   useEffect(() => {
//     if (searchValue === '') return

//     const fetchArticles = async () => {
//       try {
//         setIsLoading(true)
//         const data = await getArticles(searchValue, page)
//         // setArticles([...articles, ...data.hits])
//         // setArticles((prevState) => {
//         //   return [...prevState, ...data.hits]
//         // })
//         setArticles((prevState) => [...prevState, ...data.hits])
//         toast.success('Articles done...')
//       } catch {
//         setError(true)
//         toast.error('Oops.. Something wrong.')
//       } finally {
//         setIsLoading(false)
//       }
//     }
//     fetchArticles()
//   }, [searchValue, page])

//   const handleSearch = async (searchQuery) => {
//     setSearchValue(searchQuery)
//     setPage(1)
//     setArticles([])
//   }

//   const handleLoadMore = async () => {
//     setPage(page + 1)
//   }

//   return (
//     <div>
//       {error && <h2>Oops.. Something wrong. Pls reload page.</h2>}
//       <SearchArticlesForm onSearch={handleSearch} />
//       <hr />
//       {articles.length === 0 && isLoading && <h2>Loading..</h2>}
//       {articles.length > 0 && <ArticleList articles={articles} />}
//       {/* {isLoading && <h2>Loading..</h2>}
//       {articles.length > 0 && !isLoading && <button onClick={handleLoadMore}>Load more..</button>} */}
//       {articles.length > 0 && (
//         <button disabled={isLoading} onClick={handleLoadMore}>
//           {isLoading ? 'Loading..' : 'Load more..'}
//         </button>
//       )}
//     </div>
//   )
// }

// export default App
