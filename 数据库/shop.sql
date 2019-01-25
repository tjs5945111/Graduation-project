/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50562
 Source Host           : localhost:3306
 Source Schema         : market

 Target Server Type    : MySQL
 Target Server Version : 50562
 File Encoding         : 65001

 Date: 11/01/2019 20:50:26
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for shop
-- ----------------------------
DROP TABLE IF EXISTS `shop`;
CREATE TABLE `shop`  (
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `url` varchar(999) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` int(10) NULL DEFAULT NULL,
  `details` varchar(999) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `service` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `count` int(11) NULL DEFAULT NULL,
  `style` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `color` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `changes` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `na` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 28 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of shop
-- ----------------------------
INSERT INTO `shop` VALUES ('华为', 3, '//img12.360buyimg.com/n1/s450x450_jfs/t21415/332/642302956/189613/778f2021/5b13cd6cN8e12d4aa.jpg|//img12.360buyimg.com/n1/s450x450_jfs/t20869/181/778670826/121219/5ed31b9d/5b179c28Nbf5fc580.jpg|//img12.360buyimg.com/n1/s450x450_jfs/t20704/108/768606014/119494/f8428a9/5b179c2cNf0dc7195.jpg', '荣耀9i', 1199, '商品毛重：380.00g    多卡支持：双卡双待单4G    机身厚度：薄（7mm-8.5mm）    前置摄像头像素：500万-799万    后置摄像头像素：1200万-1999万    网络制式：4G LTE全网通4G LTE    网络特性：其他', '商品促销信息以商品详情页“促销”栏中的信息为准；商品的具体售价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前先联系销售商咨询。', 7985, '64GB|128GB|256GB', '红色|白色|土豪金|玫瑰金', '正在热销', 'h', 'z');
INSERT INTO `shop` VALUES ('华为', 17, '//img14.360buyimg.com/n1/s450x450_jfs/t13441/73/1250191369/239632/8b94bbc6/5a1d1e2dN6ba9aac4.jpg|//img14.360buyimg.com/n1/s450x450_jfs/t13069/87/1236664786/166858/d08757e4/5a1d1e28Nb793dd94.jpg|//img14.360buyimg.com/n1/s450x450_jfs/t12691/24/1252876040/159232/6a88d1b0/5a1d1e2bN80895699.jpg', '荣耀 V10', 5412, '商品毛重：350.00g    多卡支持：双卡双待单4G    机身厚度：薄（7mm-8.5mm）    前置摄像头像素：500万-799万    后置摄像头像素：1200万-1999万    网络制式：4G LTE全网通4G LTE    网络特性：其他', '自购机日起（以购机发票为准），如因质量问题或故障，凭厂商维修中心或特约维修点的质量检测证明，享受15日内退货或更换一部享有重新计算1年保修期的设备，15日以上在质保期内根据具体情况更换相关部件或提供一台部分重新装配的设备，仅保留消费者现有设备后盖。更换的部件和配件享受原有1年保修期的剩余时长或90天的保修期，以其中时间较长者为准', 2541, '64GB|128GB|256GB', '红色|白色|土豪金|玫瑰金', '年度排行榜', 'h', 'n');
INSERT INTO `shop` VALUES ('vivo', 27, '//img11.360buyimg.com/n1/s450x450_jfs/t21268/122/212047020/280193/7a4eac75/5b03c9ceNc74989df.jpg|//img11.360buyimg.com/n1/s450x450_jfs/t17530/183/2671376347/172871/bc06d41e/5b03c9cbN87f6fcf8.jpg|//img11.360buyimg.com/n1/s450x450_jfs/t1/2541/7/5856/524928/5ba0c8e9E83adc2cc/6ce772271659603d.jpg', 'vivo X21', 1250, '商品毛重：380.00g    多卡支持：双卡双待单4G    机身厚度：薄（7mm-8.5mm）    前置摄像头像素：500万-799万    后置摄像头像素：1200万-1999万    网络制式：4G LTE全网通4G LTE    网络特性：其他', '自购机日起（以购机发票为准），如因质量问题或故障，凭厂商维修中心或特约维修点的质量检测证明，享受15日内退货或更换一部享有重新计算1年保修期的设备，15日以上在质保期内根据具体情况更换相关部件或提供一台部分重新装配的设备，仅保留消费者现有设备后盖。更换的部件和配件享受原有1年保修期的剩余时长或90天的保修期，以其中时间较长者为准', 4521, '64GB|128GB|256GB', '红色|白色|土豪金|玫瑰金', '年度排行榜', 'v', 'n');

SET FOREIGN_KEY_CHECKS = 1;
