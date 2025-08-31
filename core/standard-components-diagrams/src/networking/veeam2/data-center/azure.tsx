import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.azure;',
  },
  _width: 34,
  _height: 34,
}

export function Azure(props: DiagramNodeProps) {
  return <Shape {...AZURE} {...props} _style={extendStyle(AZURE, props)} />
}
