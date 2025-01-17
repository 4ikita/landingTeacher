import MyMain from './pages/MyMain';
import MyHeader from './pages/MyHeader';
import MyFooter from './pages/MyFooter';
import avatar from './assets/avtar.png';
import MyButton from './components/UI/button/MyButton';
import compass from './assets/compass_top.png';
import key from './assets/key_perspective.png';
import trophy from './assets/trophy_front.png';
import dart from './assets/dart_board_front.png';
import suppliesTech from './assets/suppliesTech.png';
import suppliesRes from './assets/suppliesResources.png';
import progress from './assets/progress.png';
import shareIcon from './assets/share-06.png';
import coinsIcon from './assets/coins-02.png';
import umbrIcon from './assets/umbrella-03.png';
import saleIcon from './assets/share-06.png';
import snoozeIcon from './assets/clock-snooze.png';
import giftIcon from './assets/gift-01.png';
import guyHeadphones from './assets/guyWithHeadphones.png';
import womanWithBook from './assets/womanWithBook.png';
import womanWithFlowers1 from './assets/WomanWithFlowers1.png';
import womanWithFlowers2 from './assets/WomanWithFlowers2.png';
import lightning from './assets/1024 - 1280/Solid.png';
import whatsapp from './assets/1440+/whatsapp.svg';
import telegram from './assets/1440+/telegram.svg';
import gmail from './assets/1440+/gmail.svg';
import yandex from './assets/1440+/yandex.svg';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <MyHeader></MyHeader>
      <MyMain>
        <div className='about' id='about'>
          <div className='about_content'>
            <h4>Привет! Меня зовут Никита Юрьевич, и я онлайн-преподаватель</h4>
            <div>
              <h1>я помогаю ученикам понять <span>математику</span> и сдать <span>ОГЭ, ЕГЭ</span> и другие экзамены</h1>
            </div>
            <div className='about_form'>
              
              <MyButton white='white' scrollToId='subscription'>Хочу на занятия</MyButton>
            </div>
            </div>
            
          <div className='about_img'><img src={avatar} alt="репетитор" /></div>
        </div>
        <div className='edFeatures' id='features'>
          <h2>экзамены уже не за горами,<br />
           поэтому сейчас самое время начать подготовку!</h2>
          <div className='edFeatures_content'>
            <div className='edFeatures_content_sm'>
              <div className='content_item item1'>
                <h4>Составим план обучения</h4>
                <img src={compass} alt="план обучения" />
                </div>
              <div className='content_item item2'>
                <h4>Определим личные барьеры</h4>
                <img src={key} alt="комфортная подготовка" />
                </div>
            </div>
            <div className="edFeatures_content_big">
            <div className='content_item item3'>
              <h4>Практика</h4>
              <p>Не нужно заучивать тонны теории –  мы будем разбирать её  в оптимальном формате и с практическими примерами.</p>
              <img src={trophy} alt="достижения" />
            </div>
            <div className='content_item item4'>
              <h4>Цель</h4>
              <p>Мы повторим ключевые принципы, которые так важны для успешной сдачи экзамена.</p>
              <img src={dart} alt="целеустремленность" />
            </div>
            </div>
            
            
          </div>
        </div>
        <div className='edSupplies'>
          <h2>что нужно для занятий?</h2> 
           
          <div className='edSupplies_content'>
            <div className='content_item item5'>
              <h4>Устройства</h4>
              <p>Любое устройство с доступом в интернет</p>
              <img src={suppliesTech} alt="устройства с доступом в интернет" />
            </div>
            <div className='content_item item6'>
              <h4>Программы</h4>
              <p>Преподаватель поможет ученику настроить все аккаунты для доступа к обучению</p>
              <img src={suppliesRes} alt="онлайн ресурсы" />
            </div>
            
          </div>
        </div>
        <div className='edProgress'>
          <h2>прогресс</h2> 
           
          <div className='edProgress_content'>
            <div className='big'>
              <img src={progress} alt="карта прогресса" />
              
            </div>
            <div className='small' >
              <div className='item8'>
                <h4>Как отслеживается?</h4>
                <div className='small_bulletpoints'>
                  <img src={lightning} alt="пункт" />
                  <p>После каждого занятия ученик получает домашнее задание</p>
                </div>
                <div  className='small_bulletpoints'>
                  <img src={lightning} alt="пункт" />
                  <p>Выполненные задания проверяются и включаются в ежемесячный отчёт</p>
                </div>
               
               
              </div>
              <div className='item8'>
                <h4>Цель отслеживания прогресса</h4>
                <p>Выполнение домашнего задания закрепляет пройденный материал, развивает самостоятельность и ответственность, что дает более глубокое понимание и усвоение учебного материала.</p>
                
              </div>
            </div>
          </div>
        </div>
        <div className='FAQ'>
          <h2>частые вопросы</h2>
          <div className='FAQ_content'>
            <div className='third'>
            <div className='item8'>
                <img src={shareIcon} alt="перенос занятия" />
                <h4>Переносы</h4>
               <p>не позднее чем за 8 часов до занятия</p>
               
              </div>
              <div className='item8'>
              <img src={coinsIcon} alt="оплата занятий" />
                <h4>Порядок оплаты</h4>
               <p>Оплата производится ежемесячно, до даты первого занятия в месяце</p>
              
              </div>
              
            </div>
            <div className='third'>
              <div className='item8'>
              <img src={umbrIcon} alt="каникулы" />
                <h4>Каникулы</h4>
                <p>14 дней с сохранением расписания раз в полугодие</p>
           
              </div>
            
              <div className='item8'>
              <img src={saleIcon} alt="рассрочка" />
                <h4>Рассрочка</h4>
               <p>Есть возможность разбить сумму на два платежа</p>
              
              </div>
            </div>
            <div className='rightside'>
            <div className='item8'>
                <img src={snoozeIcon} alt="напоминание" />
                <h4>Если забыл...</h4>
               <p>Преподаватель будет ждать вас все время по расписанию. </p>
               <p>Если же ученик так и не подключился - преподаватель отправит все материалы урока и домашнее задание для самостоятельной работы.</p>
              </div>
            </div>
          </div>
          <div className='bottomside_border'>
          <div className='bottomside'>
          <div className='item8'>
                <img src={giftIcon} alt="бонус" />
                <h4>Бонусная программа</h4>
               <p>Отправляйте информацию своим друзьям и знакомым, приглашайте в пары и тройки. </p>
               
              </div>
          
          <div className='bonus'>
            <h3>2000₽</h3>
            <p>Бонус за каждого приглашенного ученика!</p>
          </div>
          </div>
          </div>
          
        </div>
        
        <div className='reviews' id='reviews'>
          <h2>отзывы</h2>
          <div className='reviews_content'>
          <div className='reviews_big'>
            <div className='reviews_row'>
              <div className='reviews_promise'>
                <h2>90% моих учеников </h2>
                <p>успешно сдали ЕГЭ, ОГЭ и поступили в ВУЗы</p>
              </div>
              <div className='reviews_item'>
              <div className='reviews_info'>
                <img src={womanWithBook} alt="девушка с книгой" />
                <h3>Татьяна</h3>
                </div>
                <p>"Думаю, в его результатах и Ваша большая заслуга, если учитель интересно и хорошо доносит информацию, то и ученик старается лучше) раскрывает свой потенциал"</p>
              </div>

            </div>
            <div className='reviews_row'>
              <div className='reviews_item'>
              <div className='reviews_info'>
                <img src={womanWithFlowers1} alt="девушка с цветами" />
                <h3>Марина</h3>
                </div>
                <p>"Никита, добрый вечер, Михаил, наверное уже вам написал, что сдал на 4 экзамен. Спасибо вам за продуктивные занятия!"</p>
              </div>
              <div className='reviews_item'>
              <div className='reviews_info'>
                <img src={womanWithFlowers2} alt="девушка с цветами" />
                <h3>Елена</h3>
                </div>
                <p>"Никита, здравствуйте. Святослав пересдал на 4, только-только написала кл рук. Спасибо большое, отдельно за экспресс курс!" </p>
              </div>

          </div>
        </div>
        <div className='reviews_small'>
          <div className='reviews_item'>
          <div className='reviews_info'>
                <img src={guyHeadphones} alt="ученик в наушниках" />
                <h3>Артем</h3>
                </div>
            <p>"Никита, добрый день, сдал на 82 балла, спасибо что занимались со мной в 10 классе и чуть-чуть в 11"</p>
          </div>

        </div>
          </div>
      </div>

      <div className='pricing' id='pricing'>
        <h2>групповые и индивидуальные занятия</h2>
        <div className="pricing_content">
        <div className='pricing_item pricing_item_1'>
          <img src="" alt="" />
          <div className='item_title'>Group</div>
          <p>Подойдет для изучения нового материала и закрепления навыков в неспешном режиме</p>
          <div className='item_info'>
            <div className="pricing_details">
            <div className="amountOfLessons">
              <span>8</span>
              <p>занятий в мес.</p>
            </div>
            <div className="singleLessonPrice">
              <span>1 800₽</span> 
              <p>за занятие</p>
              </div>
            </div>
            <MyButton white='white' scrollToId='subscription'>Хочу на занятия</MyButton>
            <div className='lesson_details'>
              <div className="detail_name">Занятие</div>
              <div className="detail_value">Групповое (4-5 чел.)</div>
            </div>
            <div className='lesson_details'>
              <div className="detail_name">Количество</div>
              <div className="detail_value">8 занятий</div>
            </div>
            <div className='lesson_details'>
              <div className="detail_name">Продолжительность</div>
              <div className="detail_value">50 мин.</div>
            </div>
            <div className='lesson_details'>
              <div className="detail_name">Частота</div>
              <div className="detail_value">2 раза в неделю</div>
            </div>
            <div className='lesson_details'>
              <div className="detail_name">Срок действия тарифа</div>
              <div className="detail_value">1 месяц</div>
            </div>
            <div className='lesson_details'>
              <div className="detail_name">Стоимость занятия*</div>
              <div className="detail_value">1 800₽</div>
            </div>
            <div className='lesson_details'>
              <div className="detail_name">Стоимость тарифа/месяц</div>
              <div className="detail_value">14 400₽</div>
            </div>
          </div>
          <div className="disclaimer">
              <p>*Оплата производится за весь месяц сразу. Возможность оплаты за отдельные уроки, к сожалению, не предусмотрена.</p>
            </div>

        </div>
        <div className='pricing_item pricing_item_2'>
          <img src="" alt="" />
          <div className='item_title'>Intensive</div>
          <p>Идеально для тех, кто знает свою цель и готов к серьезной работе на пути к высоким результатам!</p>
          <div className='item_info'>
          <div className="pricing_details">
            <div className="amountOfLessons">
              <span>12</span>
              <p>занятий в мес.</p>
            </div>
            <div className="singleLessonPrice">
              <span>2 600₽</span> 
              <p>за занятие</p>
              </div>
            </div>
            <MyButton white='white' scrollToId='subscription'>Хочу на занятия</MyButton>
            <div className='lesson_details'>
              <div className="detail_name">Занятие</div>
              <div className="detail_value">Индивидуальное</div>
            </div>
            <div className='lesson_details'>
              <div className="detail_name">Количество</div>
              <div className="detail_value">12 занятий</div>
            </div>
            <div className='lesson_details'>
              <div className="detail_name">Продолжительность</div>
              <div className="detail_value">50 мин.</div>
            </div>
            <div className='lesson_details'>
              <div className="detail_name">Частота</div>
              <div className="detail_value">3 раза в неделю</div>
            </div>
            <div className='lesson_details'>
              <div className="detail_name">Срок действия тарифа</div>
              <div className="detail_value">1 месяц</div>
            </div>
            <div className='lesson_details'>
              <div className="detail_name">Стоимость занятия*</div>
              <div className="detail_value">2 600₽</div>
            </div>
            <div className='lesson_details'>
              <div className="detail_name">Стоимость тарифа/месяц</div>
              <div className="detail_value">31 200₽</div>
            </div>
          </div>
          <div className="disclaimer">
              <p>*Оплата производится за весь месяц сразу. Возможность оплаты за отдельные уроки, к сожалению, не предусмотрена.</p>
            </div>

        </div>
        <div className='pricing_item pricing_item_3'>
          <img src="" alt="" />
          <div className='item_title'>Basic</div>
          <p>Подойдет для изучения нового материала и закрепления навыков в неспешном режиме</p>
          <div className='item_info'>
          <div className="pricing_details">
            <div className="amountOfLessons">
              <span>8</span>
              <p>занятий в мес.</p>
            </div>
            <div className="singleLessonPrice">
              <span>3 000₽</span> 
              <p>за занятие</p>
              </div>
            </div>
            <MyButton white='white' scrollToId='subscription'>Хочу на занятия</MyButton>
            <div className='lesson_details'>
              <div className="detail_name">Занятие</div>
              <div className="detail_value">Индивидуальное</div>
            </div>
            <div className='lesson_details'>
              <div className="detail_name">Количество</div>
              <div className="detail_value">8 занятий</div>
            </div>
            <div className='lesson_details'>
              <div className="detail_name">Продолжительность</div>
              <div className="detail_value">50 мин.</div>
            </div>
            <div className='lesson_details'>
              <div className="detail_name">Частота</div>
              <div className="detail_value">2 раза в неделю</div>
            </div>
            <div className='lesson_details'>
              <div className="detail_name">Срок действия тарифа</div>
              <div className="detail_value">1 месяц</div>
            </div>
            <div className='lesson_details'>
              <div className="detail_name">Стоимость занятия*</div>
              <div className="detail_value">3 000₽</div>
            </div>
            <div className='lesson_details'>
              <div className="detail_name">Стоимость тарифа/месяц</div>
              <div className="detail_value">24 000₽</div>
            </div>
          </div>
          <div className="disclaimer">
              <p>*Оплата производится за весь месяц сразу. Возможность оплаты за отдельные уроки, к сожалению, не предусмотрена.</p>
            </div>

        </div>
        </div>
        <div className="cta_getStarted">
  <div className="cta_title">
    <h2>Свяжитесь с нами прямо сейчас и забронируйте место,</h2>
    чтобы получить лучшие результаты уже завтра!
  </div>
  <div className="cta_form" id="subscription">
    <div className="cta_socials">
      <a href="https://wa.me/79323248509?text=Здравствуйте,%20Никита,%20хочу%20записаться/записатать%20ребенка%20на%20занятия:" target="_blank" rel="noopener noreferrer">
        <img src={whatsapp} alt="WhatsApp" />
      </a>
      WhatsApp
    </div>
    <div className="cta_socials">
      <a href="https://t.me/justtofindme" target="_blank" rel="noopener noreferrer">
        <img src={telegram} alt="Telegram" />
      </a>
      Telegram
    </div>
    <div className="cta_socials">
      <a
        href="mailto:math4air@gmail.com?subject=Вопрос%20по%20занятиям&body=Здравствуйте,%20Никита,%20хочу%20записаться/записатать%20ребенка%20на%20занятия:"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={gmail} alt="Gmail" />
      </a>
      Gmail
    </div>
    <div className="cta_socials">
  <a
    href="https://mail.yandex.ru/compose?to=Vasilevnikita123@yandex.ru&subj=Вопрос%20по%20занятиям&body=Здравствуйте,%20Никита,%20хочу%20записаться/записатать%20ребенка%20на%20занятия:"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={yandex} alt="Яндекс.Почта" />
  </a>
  Yandex
</div>
          <div className="disclaimer">
              <p>Нажимая на кнопку, я соглашаюсь на обработку персональных данных и с правилами пользования сайтом.</p>
            </div>
          </div>
        </div>
      </div>
      <MyFooter></MyFooter>
      </MyMain>
      
    </div>
  );
}

export default App;
