import React from "react";
import "./CuoShi.less";
import {
  BorderBox12,
  BorderBox8,
  BorderBox7,
  BorderBox13,
  ScrollBoard,
} from "@jiaminghi/data-view-react";
import { Menu } from "@/components";
import { ConfigProvider, Popover } from "antd";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Top7 from "@/assets/images/Top7.png";
import cuoshi1 from "@/assets/images/cuoshi1.png";
import cuoshi2 from "@/assets/images/cuoshi2.png";
import cuoshi3 from "@/assets/images/cuoshi3.png";
import cuoshi4 from "@/assets/images/cuoshi4.png";
import csVideo from "@/assets/csVideo.mp4";
export default function CuoShi() {
  const Right3Config = {
    header: [`<p>预防新闻:</p>`],
    data: [
      [
        `<a href="https://m.thepaper.cn/baijiahao_26809555" >家庭、学校、社会齐发力预防校园欺凌 为未成年人撑起一片法治蓝天</a>`,
      ],
      [
        `<a href="https://www.sohu.com/a/773531663_121106991">预防未成年人犯罪、保护未成年人——未成年人保护网当越织越密</a>`,
      ],
      [
        `<a href="https://finance.sina.com.cn/jjxw/2024-04-22/doc-inasruth2472160.shtml">低龄未成年人违法犯罪预防与治理建议</a>`,
      ],
      [
        `<a href="https://new.qq.com/rain/a/20240410A09MYK00">如何预防未成年人从“错误”走向“犯罪”？来听政协委员建言</a>`,
      ],
      [
        `<a href="https://new.qq.com/rain/a/20240418A02SSH00">未成年人犯罪上升，除了依法惩处外，如何做好预防工作？</a>`,
      ],
      [
        `<a href="https://www.sohu.com/a/771897530_120448408">【普法在线】未成年人严重暴力犯罪如何追责？如何预防学生恶性暴力案件？专家解读 </a>`,
      ],
      [
        `<a href="https://new.qq.com/rain/a/20230517A06NS100">瞭望｜未成年人犯罪呈新特点，如何防治？如何挽救？</a>`,
      ],
      [
        `<a href="https://news.sina.com.cn/o/2024-04-18/doc-inashhkn8145776.shtml">针对未成年人犯罪，最高检、最高法近期密集发声并透露新动向</a>`,
      ],
      [
        `<a href="http://edu.people.com.cn/n1/2020/1228/c1053-31981175.html">预防未成年人犯罪有“新武器”</a>`,
      ],
      [
        `<a href="https://www.thepaper.cn/newsDetail_forward_24631566">【预防未成年人违法犯罪专项行动】划重点了！预防青少年违法犯罪这些知识你知道吗？</a>`,
      ],
      [
        `<a href="https://news.southcn.com/node_179d29f1ce/897371ee1f.shtml">最高检回应低龄未成年人违法犯罪：不能“一放了之”</a>`,
      ],
      [
        `<a href="https://baijiahao.baidu.com/s?id=1767521088914512152">最高检：侵害不满14周岁未成年人犯罪上升</a>`,
      ],
      [
        `<a href="https://k.sina.com.cn/article_2090512390_7c9ab0060200268kk.html">最高检：未成年人犯罪呈低龄化趋势</a>`,
      ],
      [
        `<a href="https://www.chinacourt.org/article/detail/2021/01/id/5786431.shtml">如何有效应对未成年人违法犯罪</a>`,
      ],
      [
        `<a href="https://m.thepaper.cn/baijiahao_19719502">『普法宣传』—预防未成年人犯罪知识宣传</a>`,
      ],
      [
        `<a href="https://zhuanlan.zhihu.com/p/354584604">当前青少年违法犯罪的现状、特点及成因</a>`,
      ],
      [
        `<a href="https://www.thepaper.cn/newsDetail_forward_23198742">“法治进校园，安全伴我行”——《预防未成年人犯罪》</a>`,
      ],
      [
        `<a href="https://www.thepaper.cn/newsDetail_forward_26850974">【平安建设】一图读懂《预防未成年人犯罪法</a>`,
      ],
      [
        `<a href="http://www.moe.gov.cn/jyb_xwfb/s5147/202106/t20210601_534614.html">新修订的未成年人保护法、预防未成年人犯罪法今起施行——“两法”护航未成年人健康快乐成长</a>`,
      ],
      [
        `<a href="https://www.thepaper.cn/newsDetail_forward_26908493">应对低龄未成年人违法犯罪，专门矫治教育落实不力现状亟待扭转</a>`,
      ],
    ],
    index: false, //显示行号
    columnWidth: [500], //列宽度
    align: ["center", "left", "left", "center"],
    rowNum: 10,
    headerHeight: 40,
    headerBGC: "rgba(189, 0, 0, .5)", //表头颜色
    oddRowBGC: "rgba(189, 0, 0, .3)", //奇数颜色
    evenRowBGC: "transparent", //偶数颜色
    //   headerBGC: "", //表头颜色
    //   oddRowBGC: "#3f96a550", //奇数颜色
    //   evenRowBGC: "#3fa58630", //偶数颜色
    textStyle: {
      color: "rgba(255, 255, 255, 1)",
      fontFamily: "font3",
    },
  };
  return (
    <div className="CS">
      <Menu />
      <div className="Header">
        <img src={Top7} alt="" />
        <p className="P1">预防及措施</p>
        <p className="P2">BAO GANG BIG DATA PLATFORM</p>
      </div>
      <div className="left">
        <BorderBox7 color={["#A60000", "#FF574A"]} />
        {/* <div className="tit">预防措施</div> */}

        <Popover
          placement="right"
          // trigger="click"

          content={
            <div className="txt">
              <div className="title">家庭教育：</div>
              <BorderBox12 color={["#A60000", "#FF574A"]} />
              1.强调家庭对未成年人的教育和监管作用，建议加强家庭教育，提倡亲子沟通、建立良好的家庭关系。
              <br />
              2.提倡父母对孩子进行正确的行为引导，关注孩子的心理健康，建立积极的家庭氛围。
            </div>
          }
        >
          <div className="left1 h-box">
            <div className="tt">家庭教育</div>
          </div>
        </Popover>

        <Popover
          placement="right"
          // trigger="click"

          content={
            <div className="txt">
              <div className="title">学校教育：</div>
              <BorderBox12 color={["#A60000", "#FF574A"]} />
              1.强调学校教育在预防未成年犯罪中的作用，建议学校加强对学生的心理健康教育和安全教育。
              <br />
              2.提倡学校开展丰富多彩的课外活动和社会实践，培养学生正确的价值观和行为规范。
            </div>
          }
        >
          <div className="left2 h-box">
            <div className="tt">学校教育</div>
          </div>
        </Popover>

        <Popover
          placement="right"
          // trigger="click"

          content={
            <div className="txt">
              <div className="title">社区参与：</div>
              <BorderBox12 color={["#A60000", "#FF574A"]} />
              1.提倡社区各界力量参与未成年犯罪预防工作，建议社区开展关于未成年人的心理健康宣传和教育活动。
              <br />
              2.建议社区加强对未成年人的关爱和支持，提供心理咨询和帮助渠道，为未成年人创造良好的成长环境。
            </div>
          }
        >
          <div className="left3 h-box">
            <div className="tt">社区参与</div>
          </div>
        </Popover>

        <Popover
          placement="right"
          // trigger="click"

          content={
            <div className="txt">
              <div className="title">法律宣传：</div>
              <BorderBox12 color={["#A60000", "#FF574A"]} />
              1.强调法律法规对未成年犯罪的惩治和预防作用，建议加强对法律法规的宣传教育，提升未成年人的法治意识。
              <br />
              2.建议社会各界关注未成年人的法律权益，加强对未成年人的保护和帮助，共同营造和谐稳定的社会环境。
            </div>
          }
        >
          <div className="left4 h-box">
            <div className="tt">法律宣传</div>
          </div>
        </Popover>
      </div>
      <div className="center">
        <BorderBox12 color={["#A60000", "#FF574A"]} />
        <video autoPlay loop muted src={csVideo}></video>
      </div>
      <div className="right">
        <BorderBox7 color={["#A60000", "#FF574A"]} />
        <div className="">
          <ScrollBoard config={Right3Config} />
        </div>
      </div>
      <div className="bottom">
        <BorderBox7 color={["#A60000", "#FF574A"]} />
        <Swiper
          modules={[EffectFade, Autoplay]}
          className="lbt"
          // spaceBetween={5}
          slidesPerView={3}
          loop
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          centeredSlides={true}
          // navigation={true}
        >
          <SwiperSlide>
            <div className="swiper1">
              <a
                target="_Blank"
                href="https://tv.cctv.com/2016/05/22/VIDE5XXUXd3VqKVX7F3316zq160522.shtml"
              >
                <img src={cuoshi1} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="swiper2">
              <a
                target="_Blank"
                href="https://tv.cctv.com/2021/05/31/VIDEKPb7wo7BrPcgkv6SF5xP210531.shtml"
              >
                <img src={cuoshi2} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper3">
              <a
                target="_Blank"
                href="https://v.qq.com/x/page/f32500zu547.html"
              >
                <img src={cuoshi3} alt="" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper4">
              <a
                target="_Blank"
                href="https://tv.cctv.com/2017/09/14/VIDE8zOwWkVBdLHnfm06p2Ax170914.shtml?spm=C55953877151.P5RmqTVOTiLV.0.0"
              >
                <img src={cuoshi4} alt="" />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  );
}
