/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Neil Enns. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export default interface ITriggerStatistics {
  analyzedFilesCount: number;
  name?: string;
  triggeredCount: number;
}
