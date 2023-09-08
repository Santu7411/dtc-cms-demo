import React from 'react'
import { Banner } from 'payload/components'

import './index.scss'

const baseClass = 'before-dashboard'

const BeforeDashboard: React.FC = () => {
  return (
    <div className={baseClass}>
      <Banner className={`${baseClass}__banner`} type="success">
        <h4>Welcome to DTC CMS Demo!</h4>
      </Banner>
      这是一个CMS功能的演示Demo，主要演示以下几项功能:
      <ul className={`${baseClass}__instructions`}>
        <li>
          产品内容和素材的管理。
        </li>
        <li>
          微信小程序内容。
        </li>
        <li>
          客服忠诚度引擎的管理。
        </li>
        <li>
          素材、触点、目标消费者等的设置语管理。
        </li>
      </ul>
    </div>
  )
}

export default BeforeDashboard
