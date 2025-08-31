import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MEANING_2 = {
  _style: {
    entity:
      'shape=mxgraph.basic.cloud_callout;html=1;whiteSpace=wrap;fillColor=#CCCCFF;',
  },
  _width: 70,
  _height: 45,
}

export function Meaning2(props: DiagramNodeProps) {
  return (
    <Shape {...MEANING_2} {...props} _style={extendStyle(MEANING_2, props)} />
  )
}
