import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TOOLS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Tools.svg;strokeColor=none;',
  _width: 47,
  _height: 50,
}

export function Tools(props: DiagramNodeProps) {
  return <Shape {...TOOLS} {...props} _style={extendStyle(TOOLS, props)} />
}
