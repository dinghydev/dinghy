import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SNOWBALL_IMPORT_EXPORT = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.import_export;',
  },
  _original_width: 78,
  _original_height: 61,
}

export function SnowballImportExport(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, SNOWBALL_IMPORT_EXPORT)} />
  )
}
