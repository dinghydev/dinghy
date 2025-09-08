import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TOOLKIT_FOR_WINDOWS_POWERSHELL = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.toolkit_for_windows_powershell;fillColor=#737373;gradientColor=none;',
  },
  _original_width: 70.5,
  _original_height: 78,
}

export function ToolkitForWindowsPowershell(props: DiagramNodeProps) {
  return (
    <Shape
      {...TOOLKIT_FOR_WINDOWS_POWERSHELL}
      {...props}
      _style={extendStyle(TOOLKIT_FOR_WINDOWS_POWERSHELL, props)}
    />
  )
}
