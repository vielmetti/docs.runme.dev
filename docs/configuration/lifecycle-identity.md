---
runme:
  id: 01HFY0VFSB5F1PF7C28BW2YSVT
  version: v2.0
sidebar_position: 3
title: Lifecycle Identity in Runme
---

The Lifecycle Identity feature in Runme is a robust tool that assigns unique identifiers and versions to individual cells, the entire file, or both, depending on your [configuration](https://docs.runme.dev/configuration/). This functionality allows you to easily track changes, versions, and the complete history of your documents using the assigned identifiers.

> The default setting assigns a unique identifier to the cells and the markdown file.

### **Usage**

The following metadata will be added to your markdown file :

`id`: The unique Identifier that represents the specific instance of your document or cell.

`version`: The current version number on your document or cell is the version of Runme you are using.

Here is a sample of what the lifecycle identity on your file looks like:

```sh {"id":"01HFYHDGTT1BNMZD3CBCKHQGG0"}
runme:
  id: 01HFY0VFSB5F1PF7C28BW2YSVT
  version: v2
```

> Note: Each document or cell will have a unique identifier generated by Runme. Do not edit these to avoid conflicts.

### **Configuration**

To change the Lifecycle Identity feature in Runme, follow these steps:

* Navigate to Runme's [Extension Settings](https://docs.runme.dev/how-runme-works/vscode#runme-settings-for-vs-code) on the your [VS Code](https://docs.runme.dev/installation/installrunme). click on the “settings” icon and select “Extension Settings”. The Runme extension can be found in the extension toolbar at the left side on your screen.
* Next, choose the tracking level by selecting the document you wish to enable lifecycle identity tracking.

![lifecycle](../../static/img/lifecycle-identity1.png)

As shown in the image above, there are three levels of tracking available:

* [Cell level](../configuration/cell-level): Tracks changes within each individual cells in a document.
* [Document level](../configuration/document-level): Monitors the entire document for any modifications or version changes.
* All: Track changes made to both [Cell level](../configuration/cell-level) and [document](../configuration/document-level) levels.

<Infobox type="warning" title="Warning">

Cell and document IDs are provided by default. If you do want an `id` assigned to a cell or document, you can turn it off in your project by selecting `none`.

</Infobox>

## **Cell Run Grouping**

Cell Run Grouping is a important feature that works with the lifecycle identity in Runme. It improves the organization and tracking of code runs, especially when working with markdown files or individual cells within these files. This functionality works when outputs are saved to the [Runme Cloud](https://app.runme.dev/), as it allows for a more structured and insightful analysis of the code's performance over time.

### How Cell Run Grouping Works

When a user saves the output of a cell or an entire markdown file to the Runme Cloud, Runme assigns a unique identity to that file or cell. This identity is important for the cell run grouping process. It ensures that any subsequent iterations or runs of that file or cell are recorded and grouped under the same identity in the cloud.
