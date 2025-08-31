import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BACKUP_AWS_BACKUP_SUPPORT_FOR_VMWARE_WORKLOADS = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.backup_aws_backup_support_for_vmware_workloads;',
  _width: 60,
  _height: 60,
}

export function BackupAwsBackupSupportForVmwareWorkloads(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...BACKUP_AWS_BACKUP_SUPPORT_FOR_VMWARE_WORKLOADS}
      {...props}
      _style={extendStyle(
        BACKUP_AWS_BACKUP_SUPPORT_FOR_VMWARE_WORKLOADS,
        props,
      )}
    />
  )
}
