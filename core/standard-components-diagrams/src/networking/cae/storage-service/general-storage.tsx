import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GENERAL_STORAGE = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/General_Storage.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function GeneralStorage(props: DiagramNodeProps) {
  return (
    <Shape
      {...GENERAL_STORAGE}
      {...props}
      _style={extendStyle(GENERAL_STORAGE, props)}
    />
  )
}
