import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MEANING_2 = {
  _style: {
    entity:
      'shape=mxgraph.basic.cloud_callout;html=1;whiteSpace=wrap;fillColor=#CCCCFF;',
  },
  _original_width: 70,
  _original_height: 45,
}

export function Meaning2(props: DiagramNodeProps) {
  return (
    <Shape {...MEANING_2} {...props} _style={extendStyle(MEANING_2, props)} />
  )
}
