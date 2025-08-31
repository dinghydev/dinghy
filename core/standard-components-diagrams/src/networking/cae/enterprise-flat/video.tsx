import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIDEO = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.general.video',
  },
  _width: 49,
  _height: 50,
}

export function Video(props: DiagramNodeProps) {
  return <Shape {...VIDEO} {...props} _style={extendStyle(VIDEO, props)} />
}
