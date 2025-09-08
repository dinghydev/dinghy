import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BACKUP_SUPPORT_FOR_AMAZON_FSX_FOR_NETAPP_ONTAP = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.aws_backup_support_for_amazon_fsx_for_netapp_ontap;',
  },
  _original_width: 78,
  _original_height: 64,
}

export function BackupSupportForAmazonFsxForNetappOntap(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...BACKUP_SUPPORT_FOR_AMAZON_FSX_FOR_NETAPP_ONTAP}
      {...props}
      _style={extendStyle(
        BACKUP_SUPPORT_FOR_AMAZON_FSX_FOR_NETAPP_ONTAP,
        props,
      )}
    />
  )
}
