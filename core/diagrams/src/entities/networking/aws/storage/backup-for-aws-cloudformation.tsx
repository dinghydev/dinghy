import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BACKUP_FOR_AWS_CLOUDFORMATION = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.aws_backup_for_aws_cloudformation;',
  },
  _original_width: 78,
  _original_height: 64,
}

export function BackupForAwsCloudformation(props: NodeProps) {
  return (
    <Shape
      {...BACKUP_FOR_AWS_CLOUDFORMATION}
      {...props}
      _style={extendStyle(BACKUP_FOR_AWS_CLOUDFORMATION, props)}
    />
  )
}
