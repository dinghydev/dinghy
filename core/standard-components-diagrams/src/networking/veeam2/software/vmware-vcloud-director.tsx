import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VMWARE_VCLOUD_DIRECTOR = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.vmware_vcloud_director;',
  },
  _original_width: 34,
  _original_height: 34,
}

export function VmwareVcloudDirector(props: DiagramNodeProps) {
  return (
    <Shape
      {...VMWARE_VCLOUD_DIRECTOR}
      {...props}
      _style={extendStyle(VMWARE_VCLOUD_DIRECTOR, props)}
    />
  )
}
