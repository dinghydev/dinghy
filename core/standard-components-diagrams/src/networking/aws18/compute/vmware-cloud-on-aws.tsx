import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VMWARE_CLOUD_ON_AWS = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#ffffff;fillColor=#232F3E;dashed=0;verticalLabelPosition=middle;verticalAlign=bottom;align=center;html=1;whiteSpace=wrap;fontSize=10;fontStyle=1;spacing=3;shape=mxgraph.aws4.productIcon;prIcon=mxgraph.aws4.vmware_cloud_on_aws;',
  },
  _original_width: 80,
  _original_height: 110,
}

export function VmwareCloudOnAws(props: DiagramNodeProps) {
  return (
    <Shape
      {...VMWARE_CLOUD_ON_AWS}
      {...props}
      _style={extendStyle(VMWARE_CLOUD_ON_AWS, props)}
    />
  )
}
