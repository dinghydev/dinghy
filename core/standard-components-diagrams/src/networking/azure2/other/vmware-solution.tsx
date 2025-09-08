import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VMWARE_SOLUTION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/azure_vmware_solution/AVS.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 54.2,
}

export function VmwareSolution(props: DiagramNodeProps) {
  return (
    <Shape
      {...VMWARE_SOLUTION}
      {...props}
      _style={extendStyle(VMWARE_SOLUTION, props)}
    />
  )
}
