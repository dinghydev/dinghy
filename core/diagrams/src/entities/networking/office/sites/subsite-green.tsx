import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SUBSITE_GREEN = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.sites.subsite;fillColor=#7FBA42;',
  },
  _original_width: 53,
  _original_height: 40,
}

export function SubsiteGreen(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SUBSITE_GREEN)} />
}
