import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MODULE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Module.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Module(props: DiagramNodeProps) {
  return <Shape {...MODULE} {...props} _style={extendStyle(MODULE, props)} />
}
