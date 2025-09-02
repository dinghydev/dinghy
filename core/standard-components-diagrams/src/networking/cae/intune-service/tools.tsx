import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TOOLS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Tools.svg;strokeColor=none;',
  },
  _original_width: 47,
  _original_height: 50,
}

export function Tools(props: DiagramNodeProps) {
  return <Shape {...TOOLS} {...props} _style={extendStyle(TOOLS, props)} />
}
