import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HOME = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.home;',
  },
  _width: 51,
  _height: 50,
}

export function Home(props: DiagramNodeProps) {
  return <Shape {...HOME} {...props} _style={extendStyle(HOME, props)} />
}
