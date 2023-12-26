
import { tagPropsType } from '@/component/types/CardProps'
import React from 'react'

export default function(props:tagPropsType) {
  return (
    <div>
    <div className="px-6 pt-4 pb-2">
    <span className="flex bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ">
      {props.tagText}
    </span>
  </div>
    </div>
  )
}
