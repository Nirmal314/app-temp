import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery'; // Import jQuery
import 'datatables.net'; // Import DataTables

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit, AfterViewInit {
  feedbacks = [
    {
      "feedbackId": 44,
      "orderId": 2,
      "orderItemId": 3,
      "rating": 1,
      "date": "2024-05-29T11:25:50.877",
      "comments": "Bad Taste..",
      "createdOn": "2024-05-29T11:25:50.877",
      "updatedOn": "2024-05-29T11:25:50.877",
      "createdBy": 2,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 46,
      "orderId": null,
      "orderItemId": null,
      "rating": 4,
      "date": "2024-05-29T15:38:42.403",
      "comments": "Good quality",
      "createdOn": "2024-05-29T15:38:42.403",
      "updatedOn": null,
      "createdBy": 37,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 49,
      "orderId": null,
      "orderItemId": null,
      "rating": 5,
      "date": "2024-05-29T18:19:09.693",
      "comments": "Best... bhai",
      "createdOn": "2024-05-29T18:19:09.693",
      "updatedOn": "2024-05-29T18:19:09.693",
      "createdBy": 1,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 51,
      "orderId": 89,
      "orderItemId": 96,
      "rating": 4,
      "date": "2024-05-29T00:00:00",
      "comments": "drf",
      "createdOn": "2024-05-30T14:08:24",
      "updatedOn": "2024-05-31T11:01:10.473",
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 57,
      "orderId": 90,
      "orderItemId": 97,
      "rating": 3,
      "date": "2024-05-30T14:26:01.957",
      "comments": "ko",
      "createdOn": "2024-05-30T14:26:01.957",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 58,
      "orderId": 1,
      "orderItemId": 1,
      "rating": 3,
      "date": "2024-05-30T14:31:27.643",
      "comments": "Ohk ohk..",
      "createdOn": "2024-05-30T14:31:27.647",
      "updatedOn": "2024-05-30T14:31:27.647",
      "createdBy": 1,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 59,
      "orderId": 90,
      "orderItemId": 97,
      "rating": 4,
      "date": "2024-05-30T14:35:22.763",
      "comments": "ty5",
      "createdOn": "2024-05-30T14:35:22.763",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 60,
      "orderId": 90,
      "orderItemId": 97,
      "rating": 2,
      "date": "2024-05-30T14:36:38.993",
      "comments": "nbm",
      "createdOn": "2024-05-30T14:36:38.993",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 61,
      "orderId": 90,
      "orderItemId": 97,
      "rating": 1,
      "date": "2024-05-30T14:41:28.923",
      "comments": "7uiygu",
      "createdOn": "2024-05-30T14:41:28.923",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 62,
      "orderId": 90,
      "orderItemId": 97,
      "rating": 4,
      "date": "2024-05-30T14:42:45.347",
      "comments": "Good quality but nice",
      "createdOn": "2024-05-30T14:42:45.347",
      "updatedOn": "2024-06-04T10:29:04.207",
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 63,
      "orderId": 90,
      "orderItemId": 97,
      "rating": null,
      "date": "2024-05-30T14:44:16",
      "comments": "lkyyj",
      "createdOn": "2024-05-30T14:44:16.34",
      "updatedOn": "2024-05-30T16:47:46.95",
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 65,
      "orderId": 90,
      "orderItemId": 97,
      "rating": 2,
      "date": "2024-05-30T14:48:54.77",
      "comments": "66uyh",
      "createdOn": "2024-05-30T14:48:54.77",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 66,
      "orderId": 26,
      "orderItemId": 84,
      "rating": 5,
      "date": "2024-05-30T14:51:33.537",
      "comments": "kj",
      "createdOn": "2024-05-30T14:51:33.537",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 69,
      "orderId": 110,
      "orderItemId": 146,
      "rating": 2,
      "date": "2024-05-30T16:15:00.533",
      "comments": "Bad",
      "createdOn": "2024-05-30T16:15:00.533",
      "updatedOn": "2024-05-30T16:15:00.533",
      "createdBy": 186,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 71,
      "orderId": 110,
      "orderItemId": 146,
      "rating": 5,
      "date": "2024-05-30T16:16:27.27",
      "comments": "Really Amazing...",
      "createdOn": "2024-05-30T16:16:27.27",
      "updatedOn": "2024-05-30T16:16:27.27",
      "createdBy": 186,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 72,
      "orderId": 113,
      "orderItemId": 150,
      "rating": 5,
      "date": "2024-05-30T16:22:51.62",
      "comments": "Out of the world test...",
      "createdOn": "2024-05-30T16:22:51.62",
      "updatedOn": "2024-05-30T16:22:51.62",
      "createdBy": 187,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 73,
      "orderId": 90,
      "orderItemId": 97,
      "rating": 2,
      "date": "2024-05-30T16:48:37.063",
      "comments": "jhh",
      "createdOn": "2024-05-30T16:48:37.063",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 74,
      "orderId": 90,
      "orderItemId": 97,
      "rating": 3,
      "date": "2024-05-30T16:51:04.867",
      "comments": "hjvhjnj",
      "createdOn": "2024-05-30T16:51:04.867",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 75,
      "orderId": 90,
      "orderItemId": 97,
      "rating": 3,
      "date": "2024-05-30T16:54:38.203",
      "comments": "jm",
      "createdOn": "2024-05-30T16:54:38.203",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 76,
      "orderId": 90,
      "orderItemId": 97,
      "rating": 5,
      "date": "2024-05-30T16:56:58.69",
      "comments": "ytj",
      "createdOn": "2024-05-30T16:56:58.69",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 77,
      "orderId": 90,
      "orderItemId": 97,
      "rating": 3,
      "date": "2024-05-30T16:59:11.987",
      "comments": "yyh",
      "createdOn": "2024-05-30T16:59:11.987",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 78,
      "orderId": 90,
      "orderItemId": 97,
      "rating": 2,
      "date": "2024-05-30T17:05:53.01",
      "comments": "fdbf",
      "createdOn": "2024-05-30T17:05:53.01",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 79,
      "orderId": 90,
      "orderItemId": 97,
      "rating": 2,
      "date": "2024-05-30T17:06:22.9",
      "comments": "fdbf",
      "createdOn": "2024-05-30T17:06:22.9",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 82,
      "orderId": 90,
      "orderItemId": 97,
      "rating": 3,
      "date": "2024-05-30T17:19:58.243",
      "comments": "ertet",
      "createdOn": "2024-05-30T17:19:58.243",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 83,
      "orderId": 114,
      "orderItemId": 152,
      "rating": 2,
      "date": "2024-05-30T17:35:44.547",
      "comments": "Too much spicy...",
      "createdOn": "2024-05-30T17:35:44.547",
      "updatedOn": "2024-05-30T17:35:44.547",
      "createdBy": 188,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 84,
      "orderId": 26,
      "orderItemId": 85,
      "rating": 3,
      "date": "2024-05-30T17:39:26.553",
      "comments": "Not good Not bad..",
      "createdOn": "2024-05-30T17:39:26.553",
      "updatedOn": "2024-05-30T17:39:26.553",
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 85,
      "orderId": 90,
      "orderItemId": 97,
      "rating": 6,
      "date": "2024-05-30T17:39:37",
      "comments": "gff",
      "createdOn": "2024-05-30T17:39:37.84",
      "updatedOn": "2024-05-30T17:43:46.043",
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 86,
      "orderId": 110,
      "orderItemId": 146,
      "rating": 4,
      "date": "2024-05-30T17:43:15.707",
      "comments": "too good..",
      "createdOn": "2024-05-30T17:43:15.707",
      "updatedOn": "2024-05-30T17:43:15.707",
      "createdBy": 186,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 87,
      "orderId": 90,
      "orderItemId": 97,
      "rating": 4,
      "date": "2024-05-30T17:44:32.587",
      "comments": "jkgkhk",
      "createdOn": "2024-05-30T17:44:32.587",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 88,
      "orderId": 110,
      "orderItemId": 145,
      "rating": 4,
      "date": "2024-05-30T17:45:25.807",
      "comments": "too good..",
      "createdOn": "2024-05-30T17:45:25.807",
      "updatedOn": "2024-05-30T17:45:25.807",
      "createdBy": 186,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 89,
      "orderId": 114,
      "orderItemId": 154,
      "rating": 4,
      "date": "2024-05-30T00:00:00",
      "comments": "crispy...",
      "createdOn": "2024-05-30T17:49:52",
      "updatedOn": "2024-05-30T18:26:36.223",
      "createdBy": 188,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 90,
      "orderId": 90,
      "orderItemId": 97,
      "rating": 3,
      "date": "2024-05-30T17:53:57.807",
      "comments": "545t",
      "createdOn": "2024-05-30T17:53:57.807",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 91,
      "orderId": 114,
      "orderItemId": 155,
      "rating": 3,
      "date": "2024-05-30T17:58:15.26",
      "comments": "too bad..",
      "createdOn": "2024-05-30T17:58:15.26",
      "updatedOn": "2024-05-30T17:58:15.26",
      "createdBy": 188,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 92,
      "orderId": 90,
      "orderItemId": 97,
      "rating": 5,
      "date": "2024-05-30T17:58:34.813",
      "comments": "yt",
      "createdOn": "2024-05-30T17:58:34.813",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 93,
      "orderId": 90,
      "orderItemId": 97,
      "rating": 2,
      "date": "2024-05-30T18:02:58.197",
      "comments": "vcx",
      "createdOn": "2024-05-30T18:02:58.197",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 94,
      "orderId": 114,
      "orderItemId": 155,
      "rating": 3,
      "date": "2024-05-30T18:08:46.933",
      "comments": "good",
      "createdOn": "2024-05-30T18:08:46.933",
      "updatedOn": "2024-05-30T18:08:46.933",
      "createdBy": 188,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 95,
      "orderId": 90,
      "orderItemId": 97,
      "rating": 3,
      "date": "2024-05-30T18:09:00.247",
      "comments": "fdg",
      "createdOn": "2024-05-30T18:09:00.247",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 96,
      "orderId": 90,
      "orderItemId": 97,
      "rating": 4,
      "date": "2024-05-30T18:10:48.747",
      "comments": "df",
      "createdOn": "2024-05-30T18:10:48.747",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 97,
      "orderId": 90,
      "orderItemId": 97,
      "rating": 4,
      "date": "2024-05-30T18:11:24.98",
      "comments": "df",
      "createdOn": "2024-05-30T18:11:24.98",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 98,
      "orderId": 90,
      "orderItemId": 97,
      "rating": 4,
      "date": "2024-05-30T18:12:19.523",
      "comments": "df",
      "createdOn": "2024-05-30T18:12:19.523",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 99,
      "orderId": 90,
      "orderItemId": 97,
      "rating": null,
      "date": "2024-05-30T18:13:42.013",
      "comments": null,
      "createdOn": "2024-05-30T18:13:42.013",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 101,
      "orderId": null,
      "orderItemId": null,
      "rating": 5,
      "date": "2024-05-30T18:21:18.313",
      "comments": "JGH",
      "createdOn": "2024-05-30T18:21:18.313",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 102,
      "orderId": 114,
      "orderItemId": 153,
      "rating": 3,
      "date": "2024-05-30T18:22:24.37",
      "comments": "good",
      "createdOn": "2024-05-30T18:22:24.37",
      "updatedOn": "2024-05-30T18:22:24.37",
      "createdBy": 188,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 103,
      "orderId": null,
      "orderItemId": null,
      "rating": 3,
      "date": "2024-05-30T18:28:12.363",
      "comments": "4ter",
      "createdOn": "2024-05-30T18:28:12.363",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 104,
      "orderId": null,
      "orderItemId": null,
      "rating": 4,
      "date": "2024-05-30T18:28:51.557",
      "comments": "y",
      "createdOn": "2024-05-30T18:28:51.557",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 105,
      "orderId": null,
      "orderItemId": null,
      "rating": 3,
      "date": "2024-05-30T18:29:29.813",
      "comments": "5t4",
      "createdOn": "2024-05-30T18:29:29.813",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 106,
      "orderId": null,
      "orderItemId": null,
      "rating": 4,
      "date": "2024-05-30T18:30:59.86",
      "comments": "[ok",
      "createdOn": "2024-05-30T18:30:59.86",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 107,
      "orderId": null,
      "orderItemId": null,
      "rating": 4,
      "date": "2024-05-30T18:31:57.21",
      "comments": "[ok",
      "createdOn": "2024-05-30T18:31:57.21",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 108,
      "orderId": 114,
      "orderItemId": 153,
      "rating": 5,
      "date": "2024-05-30T18:38:16.353",
      "comments": "Amazing...",
      "createdOn": "2024-05-30T18:38:16.353",
      "updatedOn": "2024-05-30T18:38:16.353",
      "createdBy": 188,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 109,
      "orderId": 35,
      "orderItemId": 44,
      "rating": 5,
      "date": "2024-05-30T18:39:34.57",
      "comments": "Amazing...",
      "createdOn": "2024-05-30T18:39:34.57",
      "updatedOn": "2024-05-30T18:39:34.57",
      "createdBy": 1,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 110,
      "orderId": null,
      "orderItemId": null,
      "rating": 3,
      "date": "2024-05-30T18:49:48.333",
      "comments": "6y",
      "createdOn": "2024-05-30T18:49:48.333",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 111,
      "orderId": null,
      "orderItemId": null,
      "rating": 4,
      "date": "2024-05-30T18:52:03.973",
      "comments": "ttg",
      "createdOn": "2024-05-30T18:52:03.973",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 112,
      "orderId": null,
      "orderItemId": null,
      "rating": 4,
      "date": "2024-05-30T18:52:18",
      "comments": "ttg",
      "createdOn": "2024-05-30T18:52:18",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 113,
      "orderId": 89,
      "orderItemId": 96,
      "rating": 4,
      "date": "2024-05-31T10:43:39.737",
      "comments": "ty",
      "createdOn": "2024-05-31T10:43:39.737",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 114,
      "orderId": 90,
      "orderItemId": 97,
      "rating": 4,
      "date": "2024-05-31T10:48:19.45",
      "comments": "0p",
      "createdOn": "2024-05-31T10:48:19.45",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 115,
      "orderId": 92,
      "orderItemId": 99,
      "rating": 3,
      "date": "2024-05-31T10:54:46.6",
      "comments": "gt",
      "createdOn": "2024-05-31T10:54:46.6",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 116,
      "orderId": null,
      "orderItemId": null,
      "rating": 5,
      "date": "2024-05-31T11:01:32.563",
      "comments": "yt",
      "createdOn": "2024-05-31T11:01:32.563",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 117,
      "orderId": null,
      "orderItemId": null,
      "rating": 5,
      "date": "2024-05-31T11:01:35.023",
      "comments": "yt",
      "createdOn": "2024-05-31T11:01:35.023",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 118,
      "orderId": null,
      "orderItemId": null,
      "rating": 5,
      "date": "2024-05-31T11:01:35.737",
      "comments": "yt",
      "createdOn": "2024-05-31T11:01:35.737",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 119,
      "orderId": null,
      "orderItemId": null,
      "rating": 2,
      "date": "2024-05-31T11:03:27.617",
      "comments": "3",
      "createdOn": "2024-05-31T11:03:27.617",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 120,
      "orderId": null,
      "orderItemId": null,
      "rating": 2,
      "date": "2024-05-31T11:04:59.24",
      "comments": "3",
      "createdOn": "2024-05-31T11:04:59.24",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 121,
      "orderId": null,
      "orderItemId": null,
      "rating": 4,
      "date": "2024-05-31T11:07:52.95",
      "comments": "gfj",
      "createdOn": "2024-05-31T11:07:52.95",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 122,
      "orderId": null,
      "orderItemId": null,
      "rating": 2,
      "date": "2024-05-31T11:21:10.92",
      "comments": "Average...y",
      "createdOn": "2024-05-31T11:21:10.92",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 123,
      "orderId": null,
      "orderItemId": null,
      "rating": 2,
      "date": "2024-05-31T11:22:10.633",
      "comments": "Average...y",
      "createdOn": "2024-05-31T11:22:10.633",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 124,
      "orderId": null,
      "orderItemId": null,
      "rating": 2,
      "date": "2024-05-31T11:23:22.11",
      "comments": "Average...y",
      "createdOn": "2024-05-31T11:23:22.11",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 125,
      "orderId": null,
      "orderItemId": null,
      "rating": 2,
      "date": "2024-05-31T11:24:44.203",
      "comments": "Average...tg",
      "createdOn": "2024-05-31T11:24:44.203",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 126,
      "orderId": 26,
      "orderItemId": 84,
      "rating": 5,
      "date": "2024-05-31T11:27:48.103",
      "comments": "kj",
      "createdOn": "2024-05-31T11:27:48.103",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 127,
      "orderId": 26,
      "orderItemId": 84,
      "rating": 3,
      "date": "2024-05-31T11:29:47.517",
      "comments": "iuo",
      "createdOn": "2024-05-31T11:29:47.517",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 128,
      "orderId": 26,
      "orderItemId": 84,
      "rating": 1,
      "date": "2024-05-31T11:30:56.387",
      "comments": "22",
      "createdOn": "2024-05-31T11:30:56.387",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 129,
      "orderId": 114,
      "orderItemId": 153,
      "rating": 5,
      "date": "2024-05-31T00:00:00",
      "comments": "Good !!!",
      "createdOn": "2024-05-31T15:13:54",
      "updatedOn": "2024-05-31T15:14:36.093",
      "createdBy": 188,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 130,
      "orderId": 114,
      "orderItemId": 155,
      "rating": 4,
      "date": "2024-05-31T15:15:33.62",
      "comments": "Really Good !!!",
      "createdOn": "2024-05-31T15:15:33.62",
      "updatedOn": "2024-05-31T15:15:33.62",
      "createdBy": 188,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 135,
      "orderId": 26,
      "orderItemId": 84,
      "rating": 5,
      "date": "2024-06-03T17:31:22.657",
      "comments": "Good quality but nice",
      "createdOn": null,
      "updatedOn": null,
      "createdBy": null,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 136,
      "orderId": 26,
      "orderItemId": 84,
      "rating": 4,
      "date": "2024-06-03T18:12:38.33",
      "comments": "4txrtrdfr",
      "createdOn": null,
      "updatedOn": null,
      "createdBy": null,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 137,
      "orderId": 26,
      "orderItemId": 84,
      "rating": 5,
      "date": "2024-06-04T10:35:52.613",
      "comments": "Good quality but nice",
      "createdOn": "2024-06-04T10:35:52.613",
      "updatedOn": null,
      "createdBy": null,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 138,
      "orderId": 26,
      "orderItemId": 84,
      "rating": 4,
      "date": "2024-06-04T15:39:46.56",
      "comments": "4txrtrdfr",
      "createdOn": "2024-06-04T15:39:46.56",
      "updatedOn": null,
      "createdBy": null,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 139,
      "orderId": 26,
      "orderItemId": 84,
      "rating": 1,
      "date": "2024-06-04T15:40:35.98",
      "comments": "Bad thali! nice 2",
      "createdOn": "2024-06-04T15:40:35.98",
      "updatedOn": null,
      "createdBy": null,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 143,
      "orderId": 26,
      "orderItemId": 84,
      "rating": 1,
      "date": "2024-06-04T15:43:34.25",
      "comments": "Bad thali! nice 21",
      "createdOn": "2024-06-04T15:43:34.25",
      "updatedOn": null,
      "createdBy": null,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    },
    {
      "feedbackId": 151,
      "orderId": 26,
      "orderItemId": 85,
      "rating": null,
      "date": "2024-09-06T18:45:46.89",
      "comments": null,
      "createdOn": "2024-09-06T18:45:46.887",
      "updatedOn": null,
      "createdBy": 26,
      "isDeleted": 0,
      "feedbackDocs": [],
      "order": null,
      "orderItem": null
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
    // Initialization logic
  }

  ngAfterViewInit(): void {
    // Initialize DataTable after view initialization
    $('#feedbackTable').DataTable();
  }
}
