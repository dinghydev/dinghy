import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WHAT_S_NEW = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Info.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function WhatSNew(props: DiagramNodeProps) {
  return (
    <Shape {...WHAT_S_NEW} {...props} _style={extendStyle(WHAT_S_NEW, props)} />
  )
}
