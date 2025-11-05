import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IMPORT_TOOL = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/ImportTool.svg;strokeColor=none;',
  },
  _original_width: 60.12,
  _original_height: 68,
}

export function ImportTool(props: NodeProps) {
  return (
    <Shape
      {...IMPORT_TOOL}
      {...props}
      _style={extendStyle(IMPORT_TOOL, props)}
    />
  )
}
