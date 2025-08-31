import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTERNET_CONNECTION = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.internet_connection',
  _width: 100,
  _height: 83,
}

export function InternetConnection(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTERNET_CONNECTION}
      {...props}
      _style={extendStyle(INTERNET_CONNECTION, props)}
    />
  )
}
