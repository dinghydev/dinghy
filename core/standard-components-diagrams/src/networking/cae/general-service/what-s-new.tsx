import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WHAT_S_NEW = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Info.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function WhatSNew(props: DiagramNodeProps) {
  return (
    <Shape {...WHAT_S_NEW} {...props} _style={extendStyle(WHAT_S_NEW, props)} />
  )
}
