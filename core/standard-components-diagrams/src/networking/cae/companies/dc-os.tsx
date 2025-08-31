import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DC_OS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/DC_OS.svg;strokeColor=none;',
  _width: 40,
  _height: 50,
}

export function DcOs(props: DiagramNodeProps) {
  return <Shape {...DC_OS} {...props} _style={extendStyle(DC_OS, props)} />
}
