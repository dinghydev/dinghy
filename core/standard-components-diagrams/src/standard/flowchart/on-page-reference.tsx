import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ON_PAGE_REFERENCE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.flowchart.on-page_reference;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function OnPageReference(props: DiagramNodeProps) {
  return (
    <Shape
      {...ON_PAGE_REFERENCE}
      {...props}
      _style={extendStyle(ON_PAGE_REFERENCE, props)}
    />
  )
}
