import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HPC_WORKBENCH = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_HPC_Workbench.svg;strokeColor=none;',
  },
  _original_width: 55.60000000000001,
  _original_height: 68,
}

export function HpcWorkbench(props: DiagramNodeProps) {
  return (
    <Shape
      {...HPC_WORKBENCH}
      {...props}
      _style={extendStyle(HPC_WORKBENCH, props)}
    />
  )
}
