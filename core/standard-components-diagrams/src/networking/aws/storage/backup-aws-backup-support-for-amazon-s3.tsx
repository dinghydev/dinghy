import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BACKUP_AWS_BACKUP_SUPPORT_FOR_AMAZON_S3 = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.backup_aws_backup_support_for_amazon_s3;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function BackupAwsBackupSupportForAmazonS3(props: DiagramNodeProps) {
  return (
    <Shape
      {...BACKUP_AWS_BACKUP_SUPPORT_FOR_AMAZON_S3}
      {...props}
      _style={extendStyle(BACKUP_AWS_BACKUP_SUPPORT_FOR_AMAZON_S3, props)}
    />
  )
}
