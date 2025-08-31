import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_CONNECTOR = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.cloud_connector;',
  _width: 50,
  _height: 38.934999999999995,
}

export function CloudConnector(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_CONNECTOR}
      {...props}
      _style={extendStyle(CLOUD_CONNECTOR, props)}
    />
  )
}
